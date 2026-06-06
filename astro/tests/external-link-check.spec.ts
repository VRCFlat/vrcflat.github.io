import { test, expect } from '@playwright/test';

test.describe('外部リンクの切れ確認', () => {
  test('すべての外部リンクが有効であることを確認', async ({ page, request }) => {
    test.setTimeout(180_000); // 3分
    page.setDefaultTimeout(30_000);
    
    const baseUrl = 'https://vrcflat.github.io';
    const brokenExternalLinks: { url: string; from: string; status: number | string }[] = [];
    const visitedPaths = new Set<string>();
    const staticExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico', '.css', '.js', '.pdf', '.zip', '.unitypackage'];
    
    const isStaticAsset = (url: string): boolean => {
      return staticExtensions.some(ext => url.toLowerCase().endsWith(ext));
    };
    
    // 訪問すべきページキュー
    const queue: string[] = [baseUrl];
    const externalLinksToCheck: { url: string; from: string }[] = [];
    
    // サイト内ページをすべて訪問して外部リンクを収集
    while (queue.length > 0) {
      const currentUrl = queue.shift()!;
      const urlObj = new URL(currentUrl, baseUrl);
      const path = urlObj.pathname;
      
      if (isStaticAsset(path) || visitedPaths.has(path)) {
        continue;
      }
      
      try {
        const response = await page.goto(currentUrl, { timeout: 30_000 });
        if (!response || response.status() !== 200) {
          continue;
        }
        
        visitedPaths.add(path);
        
        // ページ内の全リンクを取得
        const links = await page.evaluate(() => {
          const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href]');
          return Array.from(anchors)
            .map(a => ({ href: a.href, text: a.textContent?.trim() || '' }))
            .filter(Boolean);
        });
        
        for (const { href } of links) {
          // mailto:やtel:、アンカーリンクはスキップ
          if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) continue;
          
          try {
            const linkUrl = new URL(href);
            
            // 外部リンクか確認
            if (linkUrl.origin !== baseUrl) {
              // 重複チェック
              const isDuplicate = externalLinksToCheck.some(l => l.url === href);
              if (!isDuplicate) {
                externalLinksToCheck.push({ url: href, from: path });
              }
            }
          } catch {
            // 無効なURLはスキップ
          }
        }
        
        // サイト内リンクをキューに追加
        for (const { href } of links) {
          try {
            const linkUrl = new URL(href);
            if (linkUrl.origin === baseUrl && !visitedPaths.has(linkUrl.pathname) && !isStaticAsset(linkUrl.pathname)) {
              queue.push(href);
            }
          } catch {
            // 無効なURLはスキップ
          }
        }
      } catch {
        // ページ読み込みエラーはスキップ
      }
    }
    
    console.log(`\nFound ${externalLinksToCheck.length} external links to check:`);
    
    // 外部リンクをチェック (Playwright の request を使用)
    for (const { url, from } of externalLinksToCheck) {
      try {
        console.log(`Checking: ${url} (from ${from})`);
        
        const response = await request.fetch(url, {
          method: 'HEAD',
          timeout: 10_000,
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)',
          },
          maxRedirects: 5,
        });
        
        const statusCode = response.status();
        await response.dispose();
        
        // x.com (Twitter) は HEAD リクエストを 403 で拒否するため、例外処理
        const isXCom = url.startsWith('https://x.com/') || url.startsWith('https://twitter.com/');
        
        if (statusCode >= 400 && !(isXCom && statusCode === 403)) {
          brokenExternalLinks.push({ url, from, status: statusCode });
          console.log(`  ❌ Status: ${statusCode}`);
        } else {
          console.log(`  ✅ Status: ${statusCode}${isXCom && statusCode === 403 ? ' (x.com HEAD制限)' : ''}`);
        }
      } catch (error) {
        brokenExternalLinks.push({ url, from, status: 'error' });
        console.log(`  ❌ Error: ${error}`);
      }
    }
    
    console.log(`\n\nSummary:`);
    console.log(`Total external links checked: ${externalLinksToCheck.length}`);
    console.log(`Broken links: ${brokenExternalLinks.length}`);
    
    if (brokenExternalLinks.length > 0) {
      console.log('\nBroken external links:');
      for (const { url, from, status } of brokenExternalLinks) {
        console.log(`  - ${url} (from ${from}, status: ${status})`);
      }
    }
    
    // ブロークン外部リンクがないことを確認
    expect(brokenExternalLinks, `Broken external links found`).toEqual([]);
  });
});

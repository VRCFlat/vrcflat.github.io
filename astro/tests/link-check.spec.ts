import { test, expect } from '@playwright/test';

test.describe('サイト内リンクの再帰的探索', () => {
  test('すべてのサイト内リンクにリンク切れがないことを再帰的に確認', async ({ page }) => {
    // タイムアウトを延長
    test.setTimeout(180_000); // 3分
    page.setDefaultTimeout(30_000);
    
    const visitedPaths = new Set<string>();
    const baseUrl = 'https://vrcflat.github.io';
    const brokenLinks: string[] = [];
    const staticExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico', '.css', '.js', '.pdf', '.zip', '.unitypackage'];
    
    const isStaticAsset = (url: string): boolean => {
      return staticExtensions.some(ext => url.toLowerCase().endsWith(ext));
    };
    
    // ページ内の全リンクを JavaScript で取得
    const getLinksFromPage = async (url: string): Promise<string[]> => {
      try {
        await page.goto(url, { timeout: 30_000 });
        const links = await page.evaluate(() => {
          const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href]');
          return Array.from(anchors).map(a => a.href).filter(Boolean);
        });
        return links;
      } catch (error) {
        brokenLinks.push(`${url} (error: ${error})`);
        return [];
      }
    };
    
    // ページが正常に読み込めるか確認
    const checkPageLoadable = async (url: string): Promise<boolean> => {
      try {
        const response = await page.goto(url, { timeout: 30_000 });
        if (!response) return false;
        return response.status() === 200;
      } catch {
        return false;
      }
    };
    
    // 訪問すべきページキュー
    const queue: string[] = [baseUrl];
    
    while (queue.length > 0) {
      const currentUrl = queue.shift()!;
      const urlObj = new URL(currentUrl, baseUrl);
      const path = urlObj.pathname;
      
      // 静的アセットはスキップ
      if (isStaticAsset(path)) {
        continue;
      }
      
      // 既に訪問したページはスキップ
      if (visitedPaths.has(path)) {
        continue;
      }
      
      console.log(`Visiting: ${path}`);
      
      // ページが読み込めるか確認
      const isLoadingable = await checkPageLoadable(currentUrl);
      if (!isLoadingable) {
        brokenLinks.push(`${currentUrl} (failed to load)`);
        continue;
      }
      
      visitedPaths.add(path);
      
      // ページ内のリンクを取得
      const links = await getLinksFromPage(currentUrl);
      console.log(`  Found ${links.length} links`);
      
      for (const link of links) {
        // mailto:やtel:などはスキップ
        if (link.startsWith('mailto:') || link.startsWith('tel:')) continue;
        
        try {
          const linkUrl = new URL(link);
          const linkPath = linkUrl.pathname;
          
          // サイト内リンクのみを探索
          if (linkUrl.origin === baseUrl && !visitedPaths.has(linkPath) && !isStaticAsset(linkPath)) {
            queue.push(link);
          }
        } catch {
          brokenLinks.push(`Invalid link: ${link} on ${path}`);
        }
      }
    }
    
    console.log(`\nVisited ${visitedPaths.size} pages:`);
    console.log(Array.from(visitedPaths).sort());
    
    if (brokenLinks.length > 0) {
      console.error('\nBroken links found:', brokenLinks);
    }
    
    // ブロークンリンクがないことを確認
    expect(brokenLinks, `Broken links found: ${brokenLinks.join(', ')}`).toEqual([]);
  });
});

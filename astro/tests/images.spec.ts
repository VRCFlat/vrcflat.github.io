import { test, expect } from '@playwright/test';

test.describe('画像読み込みテスト', () => {
  
  test('トップページの画像が正常に読み込まれる', async ({ page }) => {
    await page.goto('/');
    // ページ内の画像要素を確認
    const images = page.locator('img');
    const count = await images.count();
    
    if (count > 0) {
      // 最初の画像が正常に読み込まれていることを確認
      await expect(images.first()).toBeVisible();
    }
  });

  test('画像の src 属性が有効な URL を指している', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const src = await images.nth(i).getAttribute('src');
      if (src) {
        expect(src.startsWith('/')).toBe(true);
      }
    }
  });
});

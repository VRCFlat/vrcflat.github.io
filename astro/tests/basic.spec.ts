import { test, expect } from '@playwright/test';

test.describe('VRC Flat Fan Club Website', () => {
  
  test('トップページが正常に読み込まれる', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/フラットファンクラブ/);
  });

  test('トップページにメインコンテンツが表示される', async ({ page }) => {
    await page.goto('/');
    // ページのメインコンテンツがレンダリングされることを確認 (body 内のコンテンツが存在することを確認)
    await expect(page.locator('body')).toContainText(/フラットファンクラブ/);
  });

  test('ヘッダーが正常に表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
  });

  test('フッターが正常に表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toBeVisible();
  });
});

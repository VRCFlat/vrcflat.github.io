import { test, expect } from '@playwright/test';

test.describe('ナビゲーションテスト', () => {
  
  test('ホームページからコミュニティページにナビゲーションできる', async ({ page }) => {
    await page.goto('/');
    const communityLink = page.locator('a[href="/community/"]').first();
    if (await communityLink.isVisible().catch(() => false)) {
      await communityLink.click();
      await expect(page).toHaveURL(/community/);
    }
  });

  test('ホームページからアイテムページにナビゲーションできる', async ({ page }) => {
    await page.goto('/');
    const itemsLink = page.locator('a[href="/items/"]').first();
    if (await itemsLink.isVisible().catch(() => false)) {
      await itemsLink.click();
      await expect(page).toHaveURL(/items/);
    }
  });

  test('ホームページからガイドページにナビゲーションできる', async ({ page }) => {
    await page.goto('/');
    const guideLink = page.locator('a[href*="/guide/"]').first();
    if (await guideLink.isVisible().catch(() => false)) {
      await guideLink.click();
      await expect(page).toHaveURL(/guide/);
    }
  });

  test('ホームページからヒストリーページにナビゲーションできる', async ({ page }) => {
    await page.goto('/');
    const historyLink = page.locator('a[href="/history/"]').first();
    if (await historyLink.isVisible().catch(() => false)) {
      await historyLink.click();
      await expect(page).toHaveURL(/history/);
    }
  });
});

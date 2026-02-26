import { test, expect } from '@playwright/test';

test.describe('Button', () => {
  test('default renders correctly', async ({ page }) => {
    await page.goto('/iframe.html?id=components-button--default');
    const button = page.locator('.aa3d-pushable');
    await expect(button).toBeVisible();
  });

  test('all depths render', async ({ page }) => {
    await page.goto('/iframe.html?id=components-button--all-depths');
    const buttons = page.locator('.aa3d-pushable');
    await expect(buttons).toHaveCount(3);
  });

  test('color presets render', async ({ page }) => {
    await page.goto('/iframe.html?id=components-button--color-presets');
    const buttons = page.locator('.aa3d-pushable');
    await expect(buttons).toHaveCount(5);
  });
});

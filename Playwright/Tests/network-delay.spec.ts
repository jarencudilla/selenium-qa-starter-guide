import { test, expect } from '@playwright/test';

test('Waits for delayed network content', async ({ page }) => {
  await page.route('**/api/data', async route => {
    await new Promise(res => setTimeout(res, 3000));
    route.fulfill({ json: { success: true } });
  });

  await page.goto('https://playground.qajourney.net/network-delay/');
  await expect(page.locator('#loading')).toBeVisible();
  await expect(page.locator('#loading')).toHaveCount(0, { timeout: 4000 });
});
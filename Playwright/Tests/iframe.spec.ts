import { test, expect } from '@playwright/test';

test('Interact with iframe', async ({ page }) => {
  await page.goto('https://playground.qajourney.net/iframes/');
  const frame = page.frameLocator('iframe');
  await frame.locator('#iframe-button').click();
  await expect(frame.locator('.result')).toContainText('Clicked');
});
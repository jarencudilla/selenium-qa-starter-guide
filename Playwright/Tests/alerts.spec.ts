import { test, expect } from '@playwright/test';
test('Handles alert popup', async ({ page }) => {
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('This is an alert');
    await dialog.accept();
  });

  await page.goto('https://playground.qajourney.net/alerts/');
  await page.click('#alert-button');
});
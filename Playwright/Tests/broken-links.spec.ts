import { test, expect } from '@playwright/test';
test('Handles broken 404 page gracefully', async ({ page }) => {
  const response = await page.goto('https://playground.qajourney.net/broken-links/');
  expect(response?.status()).toBe(404);
});
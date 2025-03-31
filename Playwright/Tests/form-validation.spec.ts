import { test, expect } from '@playwright/test';

test.describe('Form Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.qajourney.net/form/');
  });

  test('Should show validation messages on submit without input', async ({ page }) => {
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toBeVisible();
  });

  test('Should submit successfully with valid input', async ({ page }) => {
    await page.fill('#name', 'QA Tester');
    await page.fill('#email', 'qa@test.com');
    await page.click('#submit');
    await expect(page.locator('.success-message')).toContainText('Form submitted');
  });
});
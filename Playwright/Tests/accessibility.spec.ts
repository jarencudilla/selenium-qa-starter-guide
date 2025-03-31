import { injectAxe, checkA11y } from 'axe-playwright';
import { test, expect } from '@playwright/test';

test('Accessibility check on Basic UI page', async ({ page }) => {
  await page.goto('https://playground.qajourney.net/basic-ui/');
  await injectAxe(page);
  await checkA11y(page);
});
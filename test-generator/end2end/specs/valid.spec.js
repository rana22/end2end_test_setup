import { test, expect } from '@playwright/test';

test.describe('My React App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./');
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/ICDC/i);
  });

  test('should contain specific text', async ({ page }) => {
    await expect(page.locator('body')).toContainText('App component');
  });
});

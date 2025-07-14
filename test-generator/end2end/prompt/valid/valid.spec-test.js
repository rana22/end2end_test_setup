import { test, expect } from '@playwright/test';

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';
test.describe('My React App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL); // your app’s URL
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/ICDC/i);
  });

  test('should contain specific text', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Learn React');
  });
});

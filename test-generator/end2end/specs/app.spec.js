import { test, expect } from '@playwright/test';

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';

test.describe('App Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should display the App component', async ({ page }) => {
    // Check if the App component text is present
    await expect(page.locator('#root')).toContainText('App component');
  });

  test('should display the initial commit message', async ({ page }) => {
    // Check if the initial commit message is present
    await expect(page.locator('h3')).toHaveText('init commit');
  });

  test('should not display any non-existent elements', async ({ page }) => {
    // Negative test: Check that a non-existent element is not present
    const nonExistentElement = await page.$('.non-existent-class');
    expect(nonExistentElement).toBeNull();
  });

  test('should not require JavaScript enabled message', async ({ page }) => {
    // Negative test: Check that the noscript message is not visible when JavaScript is enabled
    const noScriptMessage = await page.$('noscript');
    expect(noScriptMessage).toBeNull();
  });
});
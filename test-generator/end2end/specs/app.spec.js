import { test, expect } from '@playwright/test';

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';

test.describe('My React App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL); // your app’s URL
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/ICDC/i);
  });

  test('should contain "App component" text', async ({ page }) => {
    await expect(page.locator('#root')).toContainText('App component');
  });

  test('should contain "init commit" text', async ({ page }) => {
    await expect(page.locator('#root')).toContainText('init commit');
  });

  test('should contain "auto deployment 1" text', async ({ page }) => {
    await expect(page.locator('#root')).toContainText('auto deployment 1');
  });

  // Negative Test: Check if a non-existent element is not present
  test('should not contain non-existent element', async ({ page }) => {
    const nonExistentElement = await page.$('.non-existent-class');
    expect(nonExistentElement).toBeNull();
  });

  // Negative Test: Check if a non-existent text is not present
  test('should not contain "non-existent text"', async ({ page }) => {
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain('non-existent text');
  });
});
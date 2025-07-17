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
    await expect(page.locator('#root h3')).toHaveText('init commit');
  });

  test('should contain "auto deployment 1" text', async ({ page }) => {
    await expect(page.locator('#root p')).toHaveText('auto deployment 1');
  });

  // Negative Test: Check if a non-existent element is not present
  test('should not contain non-existent element', async ({ page }) => {
    const nonExistentElement = await page.$('.non-existent-class');
    expect(nonExistentElement).toBeNull();
  });
});
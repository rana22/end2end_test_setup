import { test, expect } from '@playwright/test';

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';

test.describe('My React App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL); // your app’s URL
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/React/i);
  });

  test('should contain specific text in the root element', async ({ page }) => {
    const rootElement = page.locator('#root');
    await expect(rootElement).toContainText('App component');
    await expect(rootElement).toContainText('init commit');
    await expect(rootElement).toContainText('auto deployment 1');
  });

  test('should not contain non-existent text', async ({ page }) => {
    const rootElement = page.locator('#root');
    await expect(rootElement).not.toContainText('Non-existent text');
  });

  test('should display a message if JavaScript is disabled', async ({ page }) => {
    // Simulate JavaScript being disabled
    await page.setJavaScriptEnabled(false);
    await page.reload();
    const noScriptMessage = page.locator('noscript');
    await expect(noScriptMessage).toContainText('You need to enable JavaScript to run this app.');
  });

  test('should not find a non-existent element', async ({ page }) => {
    const nonExistentElement = page.locator('.non-existent-class');
    await expect(nonExistentElement).toHaveCount(0);
  });
});
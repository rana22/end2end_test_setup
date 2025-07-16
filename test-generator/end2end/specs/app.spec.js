import { test, expect } from '@playwright/test';

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';

test.describe('My React App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL); // your app’s URL
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/ICDC/i);
  });

  test('should contain specific text in the root element', async ({ page }) => {
    const rootElement = page.locator('#root');
    await expect(rootElement).toContainText('App component');
    await expect(rootElement).toContainText('init commit');
    await expect(rootElement).toContainText('auto deployment 1');
  });

  // Positive Test: Check if the root element is present
  test('should have a root element', async ({ page }) => {
    const rootElement = await page.$('#root');
    expect(rootElement).not.toBeNull();
  });

  // Negative Test: Check if a non-existent element is not present
  test('should not have a non-existent element', async ({ page }) => {
    const nonExistentElement = await page.$('.non-existent-class');
    expect(nonExistentElement).toBeNull();
  });

  // Negative Test: Check if a non-existent text is not present
  test('should not contain non-existent text', async ({ page }) => {
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain('Non-existent text');
  });
});
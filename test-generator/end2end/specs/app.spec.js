import { test, expect } from '@playwright/test';

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';

test.describe('My React App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL); // your app’s URL
  });

  test('should display the App component text', async ({ page }) => {
    await expect(page.locator('#root')).toContainText('App component');
  });

  test('should display the initial commit heading', async ({ page }) => {
    await expect(page.locator('h3')).toHaveText('init commit');
  });

  test('should display the auto deployment paragraph', async ({ page }) => {
    await expect(page.locator('p')).toHaveText('auto deployment 1');
  });

  // Negative Test: Check if a non-existent element is not present
  test('should not find a non-existent element', async ({ page }) => {
    const nonExistentElement = await page.$('.non-existent-class');
    expect(nonExistentElement).toBeNull();
  });

  // Negative Test: Check if a wrong text is not present in the paragraph
  test('should not contain incorrect text in the paragraph', async ({ page }) => {
    await expect(page.locator('p')).not.toHaveText('incorrect text');
  });
});
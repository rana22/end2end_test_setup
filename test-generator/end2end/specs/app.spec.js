import { test, expect } from '@playwright/test';

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';

test.describe('My React App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL); // your app’s URL
  });

  test('should display the correct initial commit message', async ({ page }) => {
    await expect(page.locator('h3')).toHaveText('init commit');
  });

  test('should display the correct auto deployment message', async ({ page }) => {
    await expect(page.locator('p')).toHaveText('auto deployment 1');
  });

  // Negative Test: Check if a non-existent element is not present
  test('should not find a non-existent element', async ({ page }) => {
    const nonExistentElement = await page.$('.non-existent-class');
    expect(nonExistentElement).toBeNull();
  });

  // Positive Test: Check if the root div is present
  test('should have a root div present', async ({ page }) => {
    const rootDiv = await page.$('#root');
    expect(rootDiv).not.toBeNull();
  });

  // Negative Test: Check if a non-existent title is not present
  test('should not have a non-existent title', async ({ page }) => {
    const title = await page.title();
    expect(title).not.toMatch(/NonExistentTitle/i);
  });
});
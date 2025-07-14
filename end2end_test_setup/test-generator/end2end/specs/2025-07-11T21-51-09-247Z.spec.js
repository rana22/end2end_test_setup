import { test, expect } from '@playwright/test';
const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';
test.describe('My React App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL); // your app’s URL
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/React/i);
  });

  test('should contain specific text', async ({ page }) => {
    await expect(page.locator('body')).toContainText('Learn React');
  });

  test('should display the logo image', async ({ page }) => {
    const logo = page.locator('img.App-logo');
    await expect(logo).toBeVisible();
  });

  test('should have the correct "Learn React" link', async ({ page }) => {
    const learnReactLink = page.locator('a.App-link');
    await expect(learnReactLink).toHaveAttribute('href', 'https://reactjs.org');
  });

  test('should not have a non-existent element', async ({ page }) => {
    const nonExistentElement = page.locator('.non-existent-class');
    await expect(nonExistentElement).toHaveCount(0);
  });

  test('should have a link that opens in a new tab', async ({ page }) => {
    const learnReactLink = page.locator('a.App-link');
    await expect(learnReactLink).toHaveAttribute('target', '_blank');
  });

  test('should have a logo with correct alt text', async ({ page }) => {
    const logo = page.locator('img.App-logo');
    await expect(logo).toHaveAttribute('alt', 'logo');
  });
});
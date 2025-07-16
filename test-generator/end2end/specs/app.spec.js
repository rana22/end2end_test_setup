import { test, expect } from '@playwright/test';

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';

test.describe('My React App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL); // your app’s URL
  });

  test('should display the App component with correct initial content', async ({ page }) => {
    // Check if the App component is present
    const appComponent = await page.locator('#root');
    await expect(appComponent).toBeVisible();

    // Positive Test: Check if the heading "init commit" is present
    const heading = await page.locator('h3');
    await expect(heading).toHaveText('init commit');

    // Positive Test: Check if the paragraph "auto deployment 1" is present
    const paragraph = await page.locator('p');
    await expect(paragraph).toHaveText('auto deployment 1');
  });

  test('should not display non-existent elements', async ({ page }) => {
    // Negative Test: Check if a non-existent element is not present
    const nonExistentElement = await page.locator('.non-existent-class');
    await expect(nonExistentElement).toHaveCount(0);
  });

  test('should display JavaScript warning message when JavaScript is disabled', async ({ page }) => {
    // Simulate JavaScript being disabled
    await page.setJavaScriptEnabled(false);
    await page.reload();

    // Check if the noscript message is displayed
    const noScriptMessage = await page.locator('noscript');
    await expect(noScriptMessage).toHaveText('You need to enable JavaScript to run this app.');
  });
});
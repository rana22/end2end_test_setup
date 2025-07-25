import { test, expect } from '@playwright/test';

// const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';
const BASE_URL = 'http://localhost:5173/';

test.describe('My React App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL); // your app’s URL
  });

  test('should display the App component', async ({ page }) => {
    const appComponent = await page.locator('#root');
    await expect(appComponent).toBeVisible();
  });

  test('should contain the text "init commit"', async ({ page }) => {
    const initCommitText = await page.locator('h3');
    await expect(initCommitText).toHaveText('init commit');
  });

  test('should contain the text "auto deployment 1"', async ({ page }) => {
    const autoDeploymentText = await page.locator('p');
    await expect(autoDeploymentText).toHaveText('auto deployment 1');
  });

  // Negative Test: Check if a non-existent element is not present
  test('should not contain a non-existent element', async ({ page }) => {
    const nonExistentElement = await page.locator('.non-existent-class');
    await expect(nonExistentElement).toHaveCount(0);
  });

  // Negative Test: Check if a wrong text is not present
  test('should not contain incorrect text', async ({ page }) => {
    const incorrectText = await page.locator('body');
    await expect(incorrectText).not.toContainText('incorrect text');
  });
});
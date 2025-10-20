import { test, expect } from '@playwright/test';

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';

test.describe('NCI Cancer Research Data Commons', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/ICDC/i);
  });

  test('should display the Cancer Research Data Commons Logo', async ({ page }) => {
    const logo = page.locator('img[alt="Cancer Research Data Commons Logo"]');
    await expect(logo).toBeVisible();
  });

  test('should display the National Cancer Institute Logo', async ({ page }) => {
    const logo = page.locator('img[alt="National Cancer Institute Logo"]');
    await expect(logo).toBeVisible();
  });

  test('should have a search input with placeholder', async ({ page }) => {
    const searchInput = page.locator('input#search-input');
    await expect(searchInput).toHaveAttribute('placeholder', 'SEARCH THE ICDC');
  });

  test('should navigate to "Learn About Our Studies" when button is clicked', async ({ page }) => {
    await page.click('button:has-text("Learn About Our Studies")');
    // Add assertions here to verify the navigation, e.g., checking the URL or page content
  });

  test('should navigate to "Explore Data" when button is clicked', async ({ page }) => {
    await page.click('button:has-text("Explore Data")');
    // Add assertions here to verify the navigation, e.g., checking the URL or page content
  });

  test('should display correct data volume information', async ({ page }) => {
    const dataVolume = page.locator('.css-1b1yosu .css-w1uqtb').first();
    await expect(dataVolume).toHaveText('15.2 TB');
  });

  test('should display correct number of programs', async ({ page }) => {
    const programs = page.locator('.css-1b1yosu .css-w1uqtb').nth(1);
    await expect(programs).toHaveText('5');
  });

  test('should display correct number of studies', async ({ page }) => {
    const studies = page.locator('.css-1b1yosu .css-w1uqtb').nth(2);
    await expect(studies).toHaveText('23');
  });

  test('should display correct number of cases', async ({ page }) => {
    const cases = page.locator('.css-1b1yosu .css-w1uqtb').nth(3);
    await expect(cases).toHaveText('1,847');
  });

  test('should display correct number of samples', async ({ page }) => {
    const samples = page.locator('.css-1b1yosu .css-w1uqtb').nth(4);
    await expect(samples).toHaveText('3,294');
  });

  test('should display correct number of case files', async ({ page }) => {
    const caseFiles = page.locator('.css-1b1yosu .css-w1uqtb').nth(5);
    await expect(caseFiles).toHaveText('5,672');
  });

  test('should navigate to "Associated Studies" when button is clicked', async ({ page }) => {
    await page.click('button:has-text("Associated Studies")');
    // Add assertions here to verify the navigation, e.g., checking the URL or page content
  });

  test('should navigate to "Go to site" when button is clicked', async ({ page }) => {
    await page.click('button:has-text("Go to site")');
    // Add assertions here to verify the navigation, e.g., checking the URL or page content
  });

  test('should display contact information', async ({ page }) => {
    const contactInfo = page.locator('h4:has-text("Contact Information")');
    await expect(contactInfo).toBeVisible();
  });

  test('should display more information section', async ({ page }) => {
    const moreInfo = page.locator('h4:has-text("More Information")');
    await expect(moreInfo).toBeVisible();
  });

  test('should display system info section', async ({ page }) => {
    const systemInfo = page.locator('h4:has-text("System Info")');
    await expect(systemInfo).toBeVisible();
  });

  test('should display policies section', async ({ page }) => {
    const policies = page.locator('h4:has-text("Policies")');
    await expect(policies).toBeVisible();
  });
});
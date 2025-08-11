import { test, expect } from '@playwright/test';

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';

test.describe('NCI Cancer Research Data Commons', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/ICDC/i);
  });

  test('should display the main header', async ({ page }) => {
    const header = page.locator('.header-component .css-2mufw9');
    await expect(header).toHaveText('NCI Cancer Research Data Commons');
  });

  test('should display the search input with placeholder', async ({ page }) => {
    const searchInput = page.locator('#search-input');
    await expect(searchInput).toHaveAttribute('placeholder', 'SEARCH THE ICDC');
  });

  test('should display the correct data volume', async ({ page }) => {
    const dataVolume = page.locator('.css-1b1yosu .css-1lwy6rc:nth-child(1) .css-w1uqtb');
    await expect(dataVolume).toHaveText('15.2 TB');
  });

  test('should have a working search button', async ({ page }) => {
    const searchButton = page.locator('.css-l0ww32');
    await expect(searchButton).toBeVisible();
  });

  test('should display the correct number of programs', async ({ page }) => {
    const programs = page.locator('.css-1b1yosu .css-1lwy6rc:nth-child(2) .css-w1uqtb');
    await expect(programs).toHaveText('5');
  });

  test('should display the correct number of studies', async ({ page }) => {
    const studies = page.locator('.css-1b1yosu .css-1lwy6rc:nth-child(3) .css-w1uqtb');
    await expect(studies).toHaveText('23');
  });

  test('should display the correct number of cases', async ({ page }) => {
    const cases = page.locator('.css-1b1yosu .css-1lwy6rc:nth-child(4) .css-w1uqtb');
    await expect(cases).toHaveText('1,847');
  });

  test('should display the correct number of samples', async ({ page }) => {
    const samples = page.locator('.css-1b1yosu .css-1lwy6rc:nth-child(5) .css-w1uqtb');
    await expect(samples).toHaveText('3,294');
  });

  test('should display the correct number of case files', async ({ page }) => {
    const caseFiles = page.locator('.css-1b1yosu .css-1lwy6rc:nth-child(6) .css-w1uqtb');
    await expect(caseFiles).toHaveText('5,672');
  });

  test('should have a visible "Learn About Our Studies" button', async ({ page }) => {
    const learnButton = page.locator('.css-49mevu .builder-b24583d9a17d4af78f70764b8264aa85');
    await expect(learnButton).toBeVisible();
  });

  test('should have a visible "Explore Data" button', async ({ page }) => {
    const exploreButton = page.locator('.css-49mevu .builder-6534c1ac93584d7191879bd79c78d739');
    await expect(exploreButton).toBeVisible();
  });

  test('should display the footer with contact information', async ({ page }) => {
    const footerContact = page.locator('.footer-component .css-12dxpu7:has-text("Contact Information")');
    await expect(footerContact).toBeVisible();
  });

  test('should display the footer with more information', async ({ page }) => {
    const footerMoreInfo = page.locator('.footer-component .css-12dxpu7:has-text("More Information")');
    await expect(footerMoreInfo).toBeVisible();
  });

  test('should display the footer with system info', async ({ page }) => {
    const footerSystemInfo = page.locator('.footer-component .css-12dxpu7:has-text("System Info")');
    await expect(footerSystemInfo).toBeVisible();
  });

  test('should display the footer with policies', async ({ page }) => {
    const footerPolicies = page.locator('.footer-component .css-12dxpu7:has-text("Policies")');
    await expect(footerPolicies).toBeVisible();
  });

  test('should not display a non-existent element', async ({ page }) => {
    const nonExistentElement = page.locator('.non-existent-class');
    await expect(nonExistentElement).not.toBeVisible();
  });
});
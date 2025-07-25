import { test, expect } from '@playwright/test';

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';

test.describe('NCI Cancer Research Data Commons', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/ICDC/i);
  });

  test('should display the correct header text', async ({ page }) => {
    const headerText = await page.locator('.css-2mufw9').textContent();
    expect(headerText).toContain('NCI Cancer Research Data Commons');
  });

  test('should display the search input with placeholder', async ({ page }) => {
    const searchInput = page.locator('#search-input');
    await expect(searchInput).toHaveAttribute('placeholder', 'SEARCH THE ICDC');
  });

  test('should display the correct data volume', async ({ page }) => {
    const dataVolume = await page.locator('.css-1lwy6rc >> nth=0 .css-w1uqtb').textContent();
    expect(dataVolume).toBe('15.2 TB');
  });

  test('should display the correct number of programs', async ({ page }) => {
    const programs = await page.locator('.css-1lwy6rc >> nth=1 .css-w1uqtb').textContent();
    expect(programs).toBe('5');
  });

  test('should display the correct number of studies', async ({ page }) => {
    const studies = await page.locator('.css-1lwy6rc >> nth=2 .css-w1uqtb').textContent();
    expect(studies).toBe('23');
  });

  test('should display the correct number of cases', async ({ page }) => {
    const cases = await page.locator('.css-1lwy6rc >> nth=3 .css-w1uqtb').textContent();
    expect(cases).toBe('1,847');
  });

  test('should display the correct number of samples', async ({ page }) => {
    const samples = await page.locator('.css-1lwy6rc >> nth=4 .css-w1uqtb').textContent();
    expect(samples).toBe('3,294');
  });

  test('should display the correct number of case files', async ({ page }) => {
    const caseFiles = await page.locator('.css-1lwy6rc >> nth=5 .css-w1uqtb').textContent();
    expect(caseFiles).toBe('5,672');
  });

  test('should have a functional search button', async ({ page }) => {
    const searchButton = page.locator('.css-l0ww32');
    await expect(searchButton).toBeVisible();
    await searchButton.click();
    // Add further assertions based on the expected behavior after clicking the search button
  });

  test('should have a logo image present', async ({ page }) => {
    const logo = page.locator('.css-b2msrx');
    await expect(logo).toBeVisible();
  });

  test('should have a navigation menu with correct items', async ({ page }) => {
    const menuItems = await page.locator('.css-1wcjb4x li button').allTextContents();
    expect(menuItems).toEqual(['home', 'explore', 'programs', 'studies', 'data', 'resources', 'about']);
  });

  test('should have a footer with contact information', async ({ page }) => {
    const contactInfo = await page.locator('.footer-component .css-12dxpu7').textContent();
    expect(contactInfo).toContain('Contact Information');
  });

  test('should not have a non-existent element', async ({ page }) => {
    const nonExistentElement = await page.locator('.non-existent-class').count();
    expect(nonExistentElement).toBe(0);
  });
});
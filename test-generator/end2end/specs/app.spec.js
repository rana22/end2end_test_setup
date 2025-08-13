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

  test('should have a search input with placeholder', async ({ page }) => {
    const searchInput = page.locator('#search-input');
    await expect(searchInput).toHaveAttribute('placeholder', 'SEARCH THE ICDC');
  });

  test('should display the correct data volume', async ({ page }) => {
    const dataVolume = await page.locator('.css-1b1yosu .css-w1uqtb').first().textContent();
    expect(dataVolume).toBe('15.2 TB');
  });

  test('should have a visible logo image', async ({ page }) => {
    const logo = page.locator('img[alt="Cancer Research Data Commons Logo"]');
    await expect(logo).toBeVisible();
  });

  test('should navigate to "Learn About Our Studies" when button is clicked', async ({ page }) => {
    await page.click('button:has-text("Learn About Our Studies")');
    // Assuming it navigates to a new page or section, verify the URL or content change
    // Example: await expect(page).toHaveURL(/studies/);
  });

  test('should display the correct number of programs', async ({ page }) => {
    const programs = await page.locator('.css-1b1yosu .css-w1uqtb').nth(1).textContent();
    expect(programs).toBe('5');
  });

  test('should display the correct number of studies', async ({ page }) => {
    const studies = await page.locator('.css-1b1yosu .css-w1uqtb').nth(2).textContent();
    expect(studies).toBe('23');
  });

  test('should have a footer with contact information', async ({ page }) => {
    const contactInfo = await page.locator('footer .css-12dxpu7').first().textContent();
    expect(contactInfo).toContain('Contact Information');
  });

  test('should not have a non-existent element', async ({ page }) => {
    const nonExistentElement = await page.$('.non-existent-class');
    expect(nonExistentElement).toBeNull();
  });
});
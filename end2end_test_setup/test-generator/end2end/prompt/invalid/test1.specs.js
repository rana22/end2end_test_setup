import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Connect to the localhost or endpoint before each test
  
  await page.goto('http://localhost:3000'); // your app’s URL

  // Test case: Check if the page has the correct title
  async function testPageTitle() {
    const title = await page.title();
    if (!/React/i.test(title)) {
      console.error('Test failed: Page title does not contain "React"');
    } else {
      console.log('Test passed: Page title contains "React"');
    }
  }

  // Test case: Check if the page contains specific text
  async function testContainsSpecificText() {
    const bodyText = await page.textContent('body');
    if (!bodyText.includes('Learn React')) {
      console.error('Test failed: Page does not contain "Learn React"');
    } else {
      console.log('Test passed: Page contains "Learn React"');
    }
  }

  // Test case: Check if the logo image is present
  async function testLogoImagePresence() {
    const logo = await page.$('img.App-logo');
    if (!logo) {
      console.error('Test failed: Logo image is not present');
    } else {
      console.log('Test passed: Logo image is present');
    }
  }

  // Test case: Check if the link to React documentation is correct
  async function testReactLink() {
    const link = await page.getAttribute('a.App-link', 'href');
    if (link !== 'https://reactjs.org') {
      console.error('Test failed: React link is incorrect');
    } else {
      console.log('Test passed: React link is correct');
    }
  }

  // Test case: Negative test - Check if a non-existent element is not present
  async function testNonExistentElement() {
    const nonExistentElement = await page.$('.non-existent-class');
    if (nonExistentElement) {
      console.error('Test failed: Non-existent element is present');
    } else {
      console.log('Test passed: Non-existent element is not present');
    }
  }

  // Run all tests
  await testPageTitle();
  await testContainsSpecificText();
  await testLogoImagePresence();
  await testReactLink();
  await testNonExistentElement();

  await browser.close();
})();
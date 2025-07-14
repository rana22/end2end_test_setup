import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Connect to the localhost or endpoint
  await page.goto('http://localhost:3000'); // your app’s URL

  // Test case: Check if the page title contains "React"
  const title = await page.title();
  if (!/React/i.test(title)) {
    console.error('Test failed: Page title does not contain "React"');
  } else {
    console.log('Test passed: Page title contains "React"');
  }

  // Test case: Check if the page contains the text "Learn React"
  const bodyText = await page.textContent('body');
  if (!bodyText.includes('Learn React')) {
    console.error('Test failed: Body does not contain "Learn React"');
  } else {
    console.log('Test passed: Body contains "Learn React"');
  }

  // Positive Test: Check if the logo image is present
  const logo = await page.$('img.App-logo');
  if (!logo) {
    console.error('Test failed: Logo image is not present');
  } else {
    console.log('Test passed: Logo image is present');
  }

  // Negative Test: Check if a non-existent element is not present
  const nonExistentElement = await page.$('.non-existent-class');
  if (nonExistentElement) {
    console.error('Test failed: Non-existent element is present');
  } else {
    console.log('Test passed: Non-existent element is not present');
  }

  // Positive Test: Check if the "Learn React" link is correct
  const learnReactLink = await page.$('a.App-link');
  if (learnReactLink) {
    const href = await learnReactLink.getAttribute('href');
    if (href !== 'https://reactjs.org') {
      console.error('Test failed: "Learn React" link href is incorrect');
    } else {
      console.log('Test passed: "Learn React" link href is correct');
    }
  } else {
    console.error('Test failed: "Learn React" link is not present');
  }

  await browser.close();
})();
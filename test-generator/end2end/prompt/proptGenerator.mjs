import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';

export async function createPrompt(htmlText, isFailed, failedResponse) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const validTestCases = await fs.readFile(path.resolve(__dirname, './valid/valid.spec-test.js'), 'utf8');
  const inValidTestCases = await fs.readFile(path.resolve(__dirname, './invalid/test.specs.js'), 'utf8');
  
  // provide feedback for failed test cases
  let errorMsg = '';
  if (isFailed) {
    const outputPath = './test-results/failures.json';
    const err = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
    errorMsg = `
      Provided code response:
      ${failedResponse}
      
      Above test failed, Details of the test cases are provided below:
      ${err}
      
    `;
  }

  return `
      You are a end to end test generator.
      Analyse the given html content and create end to end test cases
      
      HTML content
      ${htmlText}
      * Create test cases based on playwright not @playwright/test, use before method to connect localhost or end point       
      * Check for elements and make postive and negative test cases the elements that are important to users
      * 
      
      Refere to Valid test case or template below:
      The test code should follow similar coding patter as provided valid test cases
      there should strictly be test.describe, test.beforeEach and test method
      similar to these cases add other cases based on the html content
      ${validTestCases}

      use below for the end point
      const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';

      Example of invalid or unable to run the test:
      below code had issue running test cases
      ${inValidTestCases}

      ${errorMsg}
  `;
};

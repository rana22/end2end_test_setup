import { execSync } from 'child_process';
import fs from 'fs';
import { main } from './main.mjs';

let maxTries = 3;
let currentTry = 1;
let passed = false;
let isFailed = false;
let failedResponse = '';
while (!passed && currentTry <= maxTries) {
// while (currentTry <= maxTries) {
  console.log(`🧪 Attempt #${currentTry} - Generating and Running Tests`);

  // 1. Generate specs via OpenAI
  const response = await main(isFailed, failedResponse);

  try {
    // 2. Run Playwright tests
    execSync('npx playwright test', { stdio: 'inherit' });
    passed = true;
    console.log('✅ All tests passed!');
  } catch (error) {
    console.log('❌ Tests failed. Sending feedback...');
    isFailed = true;
    failedResponse = structuredClone(response);
    // await feedback(); // You already have this method
    
  } finally {
    currentTry++;       
  }
}

if (!passed) {
  console.log(`❌ Still failing after ${maxTries} attempts. Giving up.`);
  process.exit(1);
}

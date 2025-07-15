import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';

import { getBodyHTML } from "./prompt/extractHTML.mjs";
import { createPrompt } from "./prompt/proptGenerator.mjs";
import { saveGeneratedTest } from "./saveTestFile.mjs";
import { extractCodeObjects, generateTestCode } from "./testGenerator.mjs";

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';
export async function main(isFailed = false, failedResponse = '') {
  const htmlTagContect = await getBodyHTML(BASE_URL);
  const prompt = await createPrompt(htmlTagContect, isFailed, failedResponse);
  console.log(prompt);
  const response = await generateTestCode(prompt);
  console.log(" ********** response *********");
  console.log(response);
  // extract code and programing languageconst __filename = fileURLToPath(import.meta.url);
  // const __filename = fileURLToPath(import.meta.url);
  // const __dirname = path.dirname(__filename);
  // const response = await fs.readFile(path.resolve(__dirname, './specs/test.spec.js'), 'utf8');
  // const codes = extractCodeObjects(response);

  const codes = extractCodeObjects(response);
  if (codes.length > 0) {
    let count = 0;
    while(count < codes.length) {
      const item = codes[count];
      const { code = '' } = item;
      const fileName = await saveGeneratedTest(code);
      count += 1;
    }
  }
  return response;
};

main();

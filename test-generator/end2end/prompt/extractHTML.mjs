import puppeteer from "puppeteer";

const BASE_URL = 'https://rana22.github.io/end2end_test_setup/';
// const BASE_URL = 'http://localhost:5173/';

export async function getBodyHTML(url) {
  const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle0' });

  // Extract only the <body> contents
  const bodyHTML = await page.evaluate(() => {
    return document.body.innerHTML;
  });

  console.log(bodyHTML); // Just the body content (inner HTML)

  await browser.close();
  return bodyHTML;
}
getBodyHTML(BASE_URL);

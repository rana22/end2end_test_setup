import fs from 'fs';
import stripAnsi from 'strip-ansi'; // npm install strip-ansi

const reportPath = './test-results/report.json';
const outputPath = './test-results/failures.json';

const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
const failures = [];

for (const rootSuite of report.suites || []) {
  for (const subSuite of rootSuite.suites || []) {
    for (const spec of subSuite.specs || []) {
      for (const test of spec.tests || []) {
        for (const result of test.results || []) {
          if (result.status === 'failed') {
            const errorObj = result.error || result.errors?.[0];

            failures.push({
              suite: rootSuite.title,
              describe: subSuite.title,
              test: spec.title,
              status: result.status,
              expectedStatus: test.expectedStatus,
              duration: `${result.duration}ms`,
              file: errorObj?.location?.file || spec.file,
              line: errorObj?.location?.line || spec.line,
              column: errorObj?.location?.column || spec.column,
              expected: extractExpected(stripAnsi(errorObj?.message || '')),
              received: extractReceived(stripAnsi(errorObj?.message || '')),
              // message: stripAnsi(errorObj?.message || 'No error message'),
              // stackSnippet: stripAnsi(errorObj?.snippet || ''),
              // fullStack: stripAnsi(errorObj?.stack || ''),
              // attachment: result.attachments?.[0]?.path || null
            });
          }
        }
      }
    }
  }
}

fs.writeFileSync(outputPath, JSON.stringify(failures, null, 2));
console.log(`✅ Extracted ${failures.length} failures to ${outputPath}`);

// --- Helper Functions ---
function extractExpected(msg) {
  const match = msg.match(/Expected string:\s+"([^"]+)"/);
  return match?.[1] || '';
}

function extractReceived(msg) {
  const match = msg.match(/Received string:\s+"([^"]+)"/);
  return match?.[1] || '';
}
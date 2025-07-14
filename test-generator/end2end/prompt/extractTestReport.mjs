import fs from 'fs';

const report = JSON.parse(fs.readFileSync('test-results/report.json', 'utf-8'));

const failedTests = report.suites
  .flatMap(suite => suite.specs)
  .flatMap(spec => spec.tests)
  .filter(test => test.results.some(r => r.status === 'failed'));

const summary = failedTests.map(test => ({
  title: test.title.join(' > '),
  error: test.results.find(r => r.status === 'failed')?.error?.message || 'No message'
}));

fs.writeFileSync(
    'test-results/failed-summary.json',
    JSON.stringify(summary, null, 2)
);

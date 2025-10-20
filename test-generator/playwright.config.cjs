// export default {
//   testDir: './end2end/specs',
//   use: {
//     browserName: 'chromium',
//     headless: false,  // show browser
//     slowMo: 80000,       // slow down actions so you can see
//     baseURL: 'http://localhost:3000',
//   },
// };

export default {
  testDir: './end2end/specs',
  reporter: [
    ['list'], // for CLI output
    ['json', { outputFile: 'test-results/report.json' }], // for structured error logs
  ],
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: false,
        slowMo: 100,
        baseURL: 'https://rana22.github.io/end2end_test_setup/',
         launchOptions: {
          args: ['--no-sandbox']
        }
      },
    }
  ]
};


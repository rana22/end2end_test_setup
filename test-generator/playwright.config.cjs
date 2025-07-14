// export default {
//   testDir: './end2end/specs',
//   use: {
//     browserName: 'chromium',
//     headless: false,  // show browser
//     slowMo: 80000,       // slow down actions so you can see
//     baseURL: 'http://localhost:3000',
//   },
// };

// export default {
//   projects: [
//     {
//       testDir: './end2end/specs',
//       name: 'chromium',
//       use: {
//         browserName: 'chromium',
//         headless: true,
//         slowMo: 1000
//       }
//     }
//   ]
// };

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './end2end/specs',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  reporter: [
    ['list'],
    ['json',
      { outputFile: 'test-results/report.json' }
    ]
  ],
});
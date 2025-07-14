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
  projects: [
    {
      testDir: './end2end/specs',
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: true,
        slowMo: 1000
      }
    }
  ]
};
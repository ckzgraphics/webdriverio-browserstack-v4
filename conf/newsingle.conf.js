exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',

  updateJob: false,
  specs: [
    './tests/specs/newSingleTest.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'chrome',
    name: 'single_test',
    build: 'webdriver-browserstack'
  }],

  reporters: ['browserstack'],
  reporterOptions: {
      browserstack: {
          outputDir: './'
      }
  },

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',
  
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}

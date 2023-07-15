const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/tests/",
  },
    viewportHeight: 900,
    viewportWidth: 1440,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 20000,
    requestTimeout: 30000,
    responseTimeout: 30000,    
    videoUploadOnPasses: false,
    video: false,
    screenshotOnRunFailure: true,
    downloadsFolder: "cypress/downloads",
    chromeWebSecurity: false, 
    ensureScrollable: false,
    numTestsKeptInMemory: 0,
    retries: {
        runMode: 1,
        openMode: 0,
    },
    parseSpecialCharSequences: false,
    allure: true,
    allureResultsPath: "allure-results",
    env: {
          "mainPageUrl": "https://btcbit.net/",
          "signInPageUrl": "https://btcbit.net/sign_in",
          "dashboardPageUrl": "https://btcbit.net/dashboard"
    }   
});

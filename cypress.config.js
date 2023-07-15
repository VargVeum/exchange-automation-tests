const { defineConfig } = require("cypress");

let d = new Date(Date.now());
d.toString() // returns "Sun May 10 2015 19:50:08 GMT-0600 (MDT)"

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',  
  reporterOptions: {
    charts: true,
    reportPageTitle: 'QA Test report ' + d,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
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

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa.navega.com.vc',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
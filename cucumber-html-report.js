const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "cypress/cucumberReports/cucumber-htmlreport.html",
  displayDuration: true,
  durationInMs: true,
  displayReportTime: true,
  saveCollectedJSON: false,
  launchReport: true,
  openReportInBrowser: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "119",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Joe Sousa Automation Engineer Test, Api using Gherkin syntax" },
      { label: "Execution Start Time", value: (new Date).getDate() },
      { label: "Execution Start Time", value: (new Date).getTime() },
      { label: "Execution End Time", value: (new Date).getTime() },
    ],
  },

});
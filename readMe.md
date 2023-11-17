# Introduction 
Created Cypress Automation Api Framework using Gherkin syntax


# Prerequisites
1. Node.js (please add Node.js to the system path https://hackmd.io/@hm222vx/AddNodeJSPath)
2. Cypress
3. Visual Studio code
4. Visual Studio code install Cucumber (Gherkin) Full support extension


# Getting Started
1. Install dependencies using 'npm install'
2. Install cucumber plugins using 'npm install @badeball/cypress-cucumber-preprocessor'
3. Install cucumber reporter using 'npm install multiple-cucumber-html-reporter --save-dev'


# Project Structure
- 'cypress/apiTesting/features' : This folder contains all .features files and folders containing steps definition. Please note Step Definition folder name to be same as .feature file name.
- 'cypress\cucumberReports\cucumber-htmlreport.html\features' : This folder contains all html reports
- 'cypress.config.js' : This is configuration file for cypress tests. ie timeout, baseurl, retries etc. 
- 'package.json' : This is file is used by Node.js and npm to manage dependencies and excecute scripts during development and deployment. ie: dependencies, devDependencies


# Build and Test
- Test is configured to run feature files using apiTesting/features, create feature files and corresponding steps definition file with same naming convention, this helps cypress to recognize which feature belongs to which specific folder with step definition.
- To run all test in headless mode use command 'npx cypress run --spec "cypress\apiTesting\features\TypesOfUsers.feature"' 
- To run test in open browser mode use command 'npx cypress open'
- To run cucumber html reports use command 'node cucumber-html-report.js' (should open by default in browser)
- To clear old cucumber reports use command 'npm run delete:reports'


# Refrences
For more info on cypress
https://docs.cypress.io/guides/overview/why-cypress

For more info on cypress.config.js 
https://docs.cypress.io/guides/references/configuration

For more info on GIT commands
https://git-scm.com/docs/git#_git_commands

For more info on npm commands
https://docs.npmjs.com/cli/v6/commands

For more info on visual studio
https://code.visualstudio.com/

For details on JSON reports
https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/json-report.md

For set up with cucumber plugins in config.js
https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/examples/browserify-cjs/cypress.config.js

For set up with cucumber plughins in package.json
https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/examples/browserify-cjs/package.json

For details on JSON Formatter
https://github.com/cucumber/json-formatter

For details on cucumber html report
https://www.npmjs.com/package/multiple-cucumber-html-reporter

For details on node packages
https://www.npmjs.com/






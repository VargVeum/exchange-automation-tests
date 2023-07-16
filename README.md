# exchange-automation-tests

> # For opening project 

##### 1. Create folder on desktop for project (in terminal)
~~~
mkdir btcbit && cd btcbit
~~~
##### 2. Clone test project from GitHub repo
~~~
git clone https://github.com/VargVeum/exchange-automation-tests.git
~~~
##### 3. Open downloaded folder in terminal
~~~
cd exchange-automation-tests
~~~
##### 4. Install Cypress.IO to downloaded folder with tests
~~~
npm install cypress --save-dev
~~~
##### 5. Download required Cypress add-ons
~~~
npm run add-plugins
~~~
IMPORTANT: List of required third-party plugins described in package.json in "add-plugins" command.
##### 6. Run Cypress Runner
~~~
npx cypress open
~~~
##### 7. Run any test via clicking on its name in runner 
~~~ 
Passwords and some links are saved in separate files, which can be obtained from the QA automation or devops engineers. 

Here file name's for paste to downloaded projects:
- cypress.config.js
~~~
> # Run tests on chosen environment

IMPORTANT: For launch on different environment need to use one of this command, relative to environment & config files:

For running UI tests:
~~~
npx cypress run --browser chrome --headless --env allure=true --spec 'cypress/e2e/tests/ui-tests/**.js'
~~~
For running API tests:
~~~
npx cypress run --browser chrome --headless --env allure=true --spec 'cypress/e2e/tests/api-tests/**.js'
~~~
> # Generate Mochawesome report

After launching tests via NPM command in terminal report will be automatically generated.

Link for HTML report will be described in terminal
Example: 
~~~
Start generate report process
Read and merge jsons from "***\Desktop\btcbit\exchange-automation-tests\cypress\reports\html\.jsons"
Enhance report
Create HTML report
HTML report successfully created!

******btcbit\exchange-automation-tests\cypress\reports\html\index.html
~~~
Copy and paste this link in browser URL for check test results



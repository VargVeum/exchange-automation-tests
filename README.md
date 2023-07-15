# exchange-automation-tests

> # For opening project 

##### 1. Create folder for project (in terminal)
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
Copy and paste this link in browser URL

> # Files uploader
~~~
(!) Pay attention that files for uploading should be stored on "Fixture" folder for correctly processing.
For interactive with upload element on page need to use .attachFile cypress plugin. 
Use only 'input' locator as interactive element on page.
~~~
> # Potential problems:
Sometimes some errors is appear if project set up fo 'clean' OS Windows or other OS:

### Errors about java generating tool when user try to generate report
SOLUTION: Need to install Java JDK on Windows (if system is clean)
~~~
https://www.oracle.com/java/technologies/downloads/
~~~

### 'Allure is not recognized as operational command...' when user try to generate report
SOLUTION: Need to install additional command line for Allure (already added to package.json)
~~~
npm i allure-commandline
~~~

### Errors about Git (Git is not recognized...)
SOLUTION: Need to install GIT
~~~
https://git-scm.com/download/win
~~~
# slack-ui-automation
Automate a functional test for starring a message using Selenium-WebDriver

## Prerequisites
- [Node.js ](https://nodejs.org/en/) - v12.16.2
- [npm](https://www.npmjs.com/) - v6.14.4
	- Recommend installing with [nvm](https://github.com/nvm-sh/nvm)
- [npx](https://www.npmjs.com/package/npx) - is a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry.

## Tools Used
- [Selenium-WebDriver](https://www.npmjs.com/package/selenium-webdriver) - Selenium is a browser automation library. Most often used for testing web-applications, Selenium may be used for any task that requires automating interaction with the browser.
- [Mocha](https://www.npmjs.com/package/mocha) - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.
- [Mochawesome](https://www.npmjs.com/package/mochawesome) - Mochawesome is a custom reporter for use with the Javascript testing framework, Mocha.

## Quickstart
Clone this repo and install all the required packages
     
     npm install

## Testing
To execute tests, run following command in the console:
    
    npm test

To see beautiful HTML reports using Mochawesome, run this command:

    npm run mochawesome

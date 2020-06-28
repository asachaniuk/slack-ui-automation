const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test suite to automate a functional test for starring a message', function() {
  this.timeout(0)
  let driver;
  var currentDate = new Date();
  let message = 'Sending test message at ' + currentDate.getTime();
  let searchTerm = 'has:star';
	
	// Login
  const login = async () => {
		const slack_url = "https://app.slack.com/client/T0153FBFTE1/C015HFDU9B3";
		const company_name = 'testcompany-lt26378';
		const username = 'asachaniuk@gmail.com';
		const passowrd = 'Tester01'
		
		await driver.get(slack_url);
		await driver.findElement(By.xpath('//*[@id="domain"]')).sendKeys(company_name, Key.RETURN);
		await driver.findElement(By.xpath('//*[@id="email"]')).sendKeys(username, Key.RETURN);
		await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys(passowrd, Key.RETURN);
		await driver.sleep(1000)
  }
  
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build()
		await login()
  })
  after(async function() {
		await driver.quit();
  })
	
	
  it('Send a message in channel', async function() {
    let messageField = await driver.findElement(By.css(".ql-editor.ql-blank"));  
    await messageField.sendKeys(message, Key.RETURN);
		await driver.sleep(2000)
  })
  
  it('Star the last message in channel', async function() {
		let lastMsg = await driver.findElement(By.css(".p-message_pane_message__message--last")); 
		await lastMsg.click();
		await driver.sleep(2000)
		
		let saveButton = lastMsg.findElement(By.css(".c-icon.c-icon--bookmark"))
		await saveButton.click()
		await driver.sleep(10000)
  })
  
  it('Search message in slack', async function() {
		await driver.sleep(10000)
		
		let searchBox = await driver.findElement(By.css(".p-top_nav__search__text")).click();
		let searchDiv = await driver.findElement(By.css(".c-search__input_box"))
		let msgField = await searchDiv.findElement(By.css(".ql-editor"));  
		await msgField.sendKeys(searchTerm)
		await driver.sleep(1000)
		
		let autocomplete = await driver.findElement(By.css(".c-search-autocomplete")) 
		let suggetion = await driver.findElement(By.id("c-search_autcomplete__suggestion_0"))
		await  suggetion.click()
		await driver.sleep(8000);

		let searchList = await driver.findElements(By.css(".c-search_message__body"));
		let text = await searchList[0].getText();
		let closeBtn = driver.findElement(By.css(".c-search__input_and_close__close"))
		await closeBtn.click()
		await driver.sleep(1000)
	
		assert.equal(true, text.includes(message), "Not matched");
  })
  
  
  it('Check saved items in sidebar', async function() {
		let savedMenu = await driver.findElement(By.id("Psaved"))
		await savedMenu.click()
		await driver.sleep(5000)
		
		let container = await driver.findElement(By.css(".p-workspace__primary_view_body"))
		let savedList1stItem = await container.findElement(By.css(".p-saved_page__item--first"));
		let text = await savedList1stItem.getText();
		
		assert.equal(true, text.includes(message), "Not matched");
  })
})
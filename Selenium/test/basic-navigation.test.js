const { Builder, By, until } = require('selenium-webdriver');
const assert = require('chai').assert;

describe('Basic Navigation', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://playground.qajourney.net');
  });

  after(async function () {
    await driver.quit();
  });

  it('should load the homepage and find the main heading', async function () {
    const heading = await driver.findElement(By.css('h1')).getText();
    assert.include(heading.toLowerCase(), 'qa journey');
  });
});

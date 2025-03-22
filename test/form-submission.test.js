const { Builder, By, until } = require('selenium-webdriver');
const assert = require('chai').assert;

describe('Form Submission', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://playground.qajourney.net/basic-ui');
  });

  after(async function () {
    await driver.quit();
  });

  it('should submit the contact form and verify success message', async function () {
    await driver.findElement(By.name('name')).sendKeys('QA Tester');
    await driver.findElement(By.name('email')).sendKeys('qa@test.com');
    await driver.findElement(By.name('message')).sendKeys('This is a test.');

    await driver.findElement(By.css('form button[type="submit"]')).click();

    const alert = await driver.wait(until.elementLocated(By.css('.alert-success')), 5000);
    const text = await alert.getText();

    assert.include(text.toLowerCase(), 'thank');
  });
});

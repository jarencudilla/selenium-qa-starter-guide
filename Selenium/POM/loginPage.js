const { By } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async navigate() {
    await this.driver.get('https://playground.qajourney.net/login');
  }

  async login(username, password) {
    await this.driver.findElement(By.name('email')).sendKeys(username);
    await this.driver.findElement(By.name('password')).sendKeys(password);
    await this.driver.findElement(By.css('button[type="submit"]')).click();
  }

  async getErrorMessage() {
    const el = await this.driver.findElement(By.css('.error'));
    return await el.getText();
  }
}

module.exports = LoginPage;

# Selenium QA Starter Guide

This repository is the official companion to the [QAJourney blog post](https://qajourney.net/selenium-automation-qa-testers)  
**"Automation Testing with Selenium: A Practical Guide for QA Testers (No CI/CD Required)"**

## What You'll Learn

- How to start browser automation without CI/CD
- Writing Selenium tests using JavaScript (Node.js)
- Using [playground.qajourney.net](https://playground.qajourney.net) for hands-on practice
- Applying Page Object Model, explicit waits, and modularization

## Setup Instructions

```bash
git clone https://github.com/YOUR-USERNAME/selenium-qa-starter-guide.git
cd selenium-qa-starter-guide
npm install
node test/basic-navigation.test.js
```

> Make sure you have Node.js installed and ChromeDriver available in your system `PATH`.

## Test Scenarios

- `basic-navigation.test.js` — Loads a test page and validates a heading
- `form-submission.test.js` — Fills out a form and checks the response
- `pom/loginPage.js` — Page Object Model example using selectors and methods

## Tech Stack

- JavaScript (Node.js)
- [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/)
- [Mocha](https://mochajs.org/) for test execution
- [Chai](https://www.chaijs.com/) for assertions

## Practice Site

All test cases in this repo run against  
**[https://playground.qajourney.net](https://playground.qajourney.net)** — a live sandbox built for automation practice and training.

## Related Blog Post

Want the full breakdown with context and code walkthroughs?  
Read the post: [Automation Testing with Selenium (No CI/CD Required)](https://qajourney.net/selenium-automation-qa-testers)

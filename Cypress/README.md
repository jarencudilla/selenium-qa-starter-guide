# Cypress Test Suite for QAJourney Playground

## 📌 Overview
This directory contains Cypress tests designed to interact with the **QA Testing Playground** at [playground.qajourney.net](https://playground.qajourney.net/). 

These tests cover UI validation, API interception, iframe interactions, accessibility checks, and more.

## 📂 Folder Structure
```
/cypress/
├── tests/              # Main Cypress test files
│   ├── form_validation.spec.js
│   ├── network_delay.spec.js
│   ├── shadow_dom.spec.js
│   ├── iframe.spec.js
│   ├── broken_links.spec.js
│   ├── accessibility.spec.js
│   ├── alerts.spec.js
├── support/            # (Optional) Custom Cypress commands
├── fixtures/           # (Optional) Test data (JSON files)
├── plugins/            # (Optional) Cypress plugins
├── cypress.config.js   # Cypress configuration file
├── README.md           # This file
```

## 🚀 How to Run the Tests
### 1️⃣ Install Cypress
If you haven’t installed Cypress yet, run:
```sh
npm install cypress --save-dev
```

### 2️⃣ Open Cypress UI
```sh
npx cypress open
```
This will launch the Cypress Test Runner.

### 3️⃣ Run All Tests Headlessly
```sh
npx cypress run
```
Runs all tests in CLI mode.

### 4️⃣ Run a Single Test File
```sh
npx cypress run --spec "cypress/tests/form_validation.spec.js"
```

## 📝 Test Scenarios Covered
| Test | Target Page | Description |
|------|------------|-------------|
| **Form Validation** | [/form/](https://playground.qajourney.net/form/) | Input handling, validation errors |
| **Network Delay Handling** | [/network-delay/](https://playground.qajourney.net/network-delay/) | Mock API responses |
| **Shadow DOM Elements** | [/dynamic-dom/](https://playground.qajourney.net/dynamic-dom/) | Handling Web Components |
| **IFrame Testing** | [/iframes/](https://playground.qajourney.net/iframes/) | Interacting inside iframes |
| **Broken Links Detection** | [/broken-links/](https://playground.qajourney.net/broken-links/) | 404 error handling |
| **Accessibility Testing** | [/basic-ui/](https://playground.qajourney.net/basic-ui/) | WCAG compliance tests |
| **JS Alerts & Popups** | [/alerts/](https://playground.qajourney.net/alerts/) | Handling alert popups |

## 🔗 Related Resources
- **QA Testing Playground:** [playground.qajourney.net](https://playground.qajourney.net/)
- **Full Automation Lab Repo:** [GitHub Repo](https://github.com/jarencudilla/qajourney-automation-lab)
- **Cypress Documentation:** [cypress.io](https://www.cypress.io/)

---
🚀 **Start testing now! Fork the repo & contribute.**
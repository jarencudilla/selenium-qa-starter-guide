# Playwright Test Suite

This folder contains automated UI tests written using [Playwright](https://playwright.dev/) targeting the [QA Testing Playground](https://playground.qajourney.net). These scripts are part of the [QAJourney Automation Lab](https://github.com/jarencudilla/qajourney-automation-lab), designed to help testers learn real-world automation using modern tools.

---

## ✅ What This Covers

- Form input validation
- Handling network delay and async content
- JavaScript alerts & dialogs
- Iframe interaction
- Broken link detection (404)
- Accessibility testing with `axe-playwright`

---

## 🧰 Getting Started

### 1. Install Playwright
```sh
npm install -D @playwright/test
npx playwright install
```

### 2. Run Tests
```sh
npx playwright test
```

You can also use:
```sh
npx playwright test --ui
```
to launch the interactive test runner.

---

## 📁 Folder Structure

```
playwright/
├── tests/
│   ├── form-validation.spec.ts
│   ├── network-delay.spec.ts
│   ├── iframe.spec.ts
│   ├── alerts.spec.ts
│   ├── broken-links.spec.ts
│   └── accessibility.spec.ts
└── playwright.config.ts (optional if added later)
```

---

## 🧠 Why Playwright?

- Built-in support for **multiple browsers** (Chromium, Firefox, WebKit)
- Smart **auto-waiting** (no more flaky sleeps)
- Works great with **iframes** and **shadow DOM**
- Built-in **trace viewer** and screenshot capture
- API + UI testing in one tool

---

## 💡 Recommended:

- Clone this repo
- Run the tests
- Try creating your own `.spec.ts` using our [QA Playground](https://playground.qajourney.net)
- Submit PRs to contribute your own testing scenarios

---

## 🔗 Related:

- 📘 [Blog Post: Getting Started with Playwright (Coming Soon)](https://qajourney.net)
- 🌐 [QAJourney Playground](https://playground.qajourney.net)
- 📂 [Full QA Automation Lab Repo](https://github.com/jarencudilla/qajourney-automation-lab)

---

## ☕ Support

Like this project? Help keep it going!  
[https://buymeacoffee.com/qajourney](https://buymeacoffee.com/qajourney)

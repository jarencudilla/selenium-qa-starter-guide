# 🚀 Contributing to QAJourney Automation Lab

Thank you for considering contributing to this project! Whether it’s a **bug fix, feature request, or new test case**, your contributions help improve **QA automation testing**.

---

## 🔧 Setting Up the Project

### 1. Fork & Clone the Repo

1. Click **Fork** (top-right corner) to create your copy.
2. Clone your fork:

   ```sh
   git clone https://github.com/YOUR_USERNAME/qajourney-automation-lab.git
   cd qajourney-automation-lab
   ```

### 2. Install Dependencies (If Running Tests Locally)

   ```sh
   npm install
   ```

### 3. Run Cypress (or Playwright/Selenium)

#### Run Cypress UI
   ```sh
   npx cypress open
   ```

#### Run Playwright Tests
   ```sh
   npx playwright test
   ```

---

## 🛠 How to Contribute

### Reporting Issues

- Go to the [Issues](https://github.com/jarencudilla/qajourney-automation-lab/issues) tab.
- Check if your issue exists before opening a new one.
- Use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md).

### Submitting a Pull Request

1. **Create a new branch**:

   ```sh
   git checkout -b feature/my-new-test
   ```

2. **Make changes & test locally.**
3. **Commit your changes**:

   ```sh
   git commit -m "Added a new Cypress test for form validation"
   ```

4. **Push to GitHub**:

   ```sh
   git push origin feature/my-new-test
   ```

5. **Create a Pull Request** using the [PR Template](.github/PULL_REQUEST_TEMPLATE.md).

---

## 📏 Code & Testing Guidelines

- **Write clear, reusable test cases.**
- **Follow existing code structure** (store tests in `/cypress/tests/`, `/playwright/tests/`).
- **Ensure all tests pass before submitting a PR.**
- **Avoid hardcoded waits (`cy.wait(5000)`).** Use Cypress’s built-in retry mechanisms.

---

## 🎯 Want to Help?

We’re looking for contributors to:

✅ Expand test cases (API, Performance, Mobile Testing).  
✅ Improve documentation & examples.  
✅ Enhance CI/CD automation.  

📢 Join the **QAJourney Community** & help build **the best QA automation sandbox!**  

🚀 **Happy testing!**
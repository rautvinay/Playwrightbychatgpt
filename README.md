# Playwright Automation Framework

A practical Playwright automation project built using JavaScript and Playwright Test.

This project demonstrates UI automation using Page Object Model (POM), custom fixtures, data-driven testing, cross-browser testing, Git, GitHub, and GitHub Actions CI.

## Tech Stack

* Playwright
* JavaScript
* Node.js
* Git
* GitHub
* GitHub Actions

## Application Under Test

**Application:** SauceDemo

**URL:** https://www.saucedemo.com/

## Automation Coverage

The project currently covers:

* Successful login
* Invalid login
* Product selection
* Add product to cart
* Remove product from cart
* Checkout
* Customer details validation
* Order confirmation
* Data-driven login testing
* Cross-browser testing

## Framework Structure

```text
Playwrightbychatgpt/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── fixtures/
│   └── test.js
│
├── pages/
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── CheckoutCompletePage.js
│
├── test-data/
│   └── loginData.js
│
├── tests/
│   ├── login.spec.js
│   ├── product.spec.js
│   ├── checkout.spec.js
│   ├── data-driven-login.spec.js
│   └── example.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## Page Object Model

The project uses the **Page Object Model (POM)** design pattern.

Page-specific locators and actions are maintained inside separate page classes, while test files focus mainly on test flow and assertions.

### Benefits of POM

* Reusability
* Maintainability
* Better test readability
* Reduced locator duplication
* Easier updates when the application UI changes

## Custom Fixtures

Custom Playwright fixtures are maintained in:

```text
fixtures/test.js
```

The project provides reusable fixtures for:

* LoginPage
* ProductPage
* CartPage
* CheckoutPage
* CheckoutCompletePage

This helps avoid repeatedly creating Page Object instances inside every test.

## Data-Driven Testing

Login test data is maintained separately in:

```text
test-data/loginData.js
```

The same test logic is executed with different sets of test data.

Example scenarios include:

* Valid username and password
* Invalid username and password

## Cross-Browser Testing

The Playwright configuration is set up to execute tests against:

* Chromium
* Firefox
* WebKit

This allows the same automation suite to validate the application across multiple browser engines.

## Test Execution

### Install dependencies

```bash
npm install
```

### Run all tests

```bash
npx playwright test
```

### Run tests with browser visible

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/checkout.spec.js
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

### Run tests on Chromium

```bash
npx playwright test --project=chromium
```

## CI/CD with GitHub Actions

The project includes a GitHub Actions workflow:

```text
.github/workflows/playwright.yml
```

The workflow automatically executes the Playwright test suite when changes are pushed to the `main` branch or when a pull request is created against `main`.

### CI Workflow

```text
Git Push
   ↓
GitHub Actions
   ↓
Checkout Repository
   ↓
Setup Node.js
   ↓
Install Dependencies
   ↓
Install Playwright Browsers
   ↓
Run Playwright Tests
   ↓
Test Result
```

## Project Purpose

This project was created to demonstrate practical Playwright automation concepts including:

* UI automation
* Page Object Model
* Custom fixtures
* Data-driven testing
* Cross-browser testing
* Git version control
* GitHub repository management
*  GitHub Actions CI

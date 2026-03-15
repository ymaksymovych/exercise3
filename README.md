# Playwright Test Framework for SauceDemo

A robust, maintainable end-to-end testing framework built with Playwright and TypeScript for testing the SauceDemo e-commerce application. This framework demonstrates best practices in automated testing, CI/CD integration, and AI-assisted development.

## 🚀 What This Framework Does

This framework provides comprehensive end-to-end testing for the SauceDemo application, covering:

- **Login functionality** with various scenarios (valid/invalid credentials, edge cases)
- **Product browsing and filtering** (sorting by name/price, adding to cart)
- **Shopping cart operations** (add, remove, checkout flow)
- **Checkout process** validation

The framework uses the Page Object Model (POM) pattern for maintainable test code and includes parallel test execution, detailed reporting, and CI/CD integration.

## 📦 Installation

### Prerequisites
- Node.js (LTS version recommended)
- Yarn package manager

### Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd exercise3
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Install Playwright browsers:
   ```bash
   yarn playwright install --with-deps
   ```

## 🏃‍♂️ Running Tests

### Run all tests
```bash
yarn playwright test
```

### Run specific test file
```bash
yarn playwright test tests/e2e/login.spec.ts
```

### Run tests with UI mode
```bash
yarn playwright test --ui
```

### Generate and view HTML report
```bash
yarn playwright show-report
```

### Run tests in headed mode (visible browser)
```bash
yarn playwright test --headed
```

## 📁 Project Organization

```
exercise3/
├── .github/
│   └── workflows/
│       └── playwright-tests.yml    # GitHub Actions CI/CD pipeline
├── src/
│   ├── components/                 # Reusable UI components (Button, Input, etc.)
│   ├── fixtures/                   # Playwright test fixtures and base test setup
│   ├── pages/                      # Page Object Model classes
│   │   ├── BasePage.ts            # Base page with common functionality
│   │   ├── LoginPage.ts           # Login page object
│   │   ├── InventoryPage.ts       # Product inventory page
│   │   ├── CartPage.ts            # Shopping cart page
│   │   └── CheckoutPage.ts        # Checkout process page
│   └── utils/                     # Utility classes (Logger, EnvHelper)
├── tests/
│   └── e2e/                       # End-to-end test specifications
│       ├── login.spec.ts          # Login test scenarios
│       ├── product.spec.ts        # Product interaction tests
│       ├── checkout.spec.ts       # Checkout flow tests
│       ├── filter.spec.ts         # Product filtering tests
│       └── cart-remove.professional.spec.ts  # Cart removal tests
├── docs/                          # Documentation
│   └── suite-maintenance-summary.md  # Test suite maintenance report
├── playwright.config.ts           # Playwright configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Project dependencies and scripts
└── yarn.lock                      # Yarn lockfile for dependency management
```

## 🔄 CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow (`.github/workflows/playwright-tests.yml`) that:

### Jobs
- **playwright-tests**: Runs the full test suite on Ubuntu with Node.js LTS
  - Installs dependencies with Yarn
  - Runs Playwright tests in parallel
  - Uploads HTML reports and traces as artifacts
  - Publishes test results to GitHub Pages (on main branch)
  - Sends Teams notifications on test failures
- **security-scan**: Runs dependency vulnerability scanning with `yarn audit`
  - Fails the pipeline on high/critical severity vulnerabilities
  - Generates security scan summary

### Features
- **Parallel execution**: Tests run concurrently for faster feedback
- **Artifact uploads**: HTML reports and traces available for download
- **GitHub Pages integration**: Live test reports published automatically
- **Security scanning**: Automated vulnerability detection
- **Notifications**: Teams alerts for failed runs
- **Timeout protection**: 30-minute limit on test execution

### Triggers
- Runs on pushes to the `main` branch
- Includes concurrency controls to cancel in-progress runs

## 🤖 AI-Assisted Development

This project was developed with the assistance of GitHub Copilot (powered by Grok), demonstrating responsible AI usage in software development:

### AI Contributions
- **Code generation**: Initial framework skeleton, Page Object classes, and test scenarios
- **Best practices**: Implementation of POM, TypeScript patterns, and Playwright configurations
- **Refactoring**: Code improvements, error handling, and maintainability enhancements
- **Documentation**: Comprehensive comments, test case IDs, and maintenance reports
- **CI/CD setup**: GitHub Actions workflows, security scanning, and deployment automation

### Human Oversight
- **Code review**: All AI-generated code was reviewed, tested, and refined by human developers
- **Quality assurance**: Manual testing, edge case coverage, and performance validation
- **Ethical considerations**: AI outputs were evaluated for accuracy, security, and best practices
- **Documentation**: Clear attribution of AI assistance and human review processes

### Lessons Learned
- AI excels at boilerplate code generation and pattern implementation
- Human expertise is crucial for testing strategies, edge cases, and system integration
- Combining AI productivity with human judgment results in high-quality, maintainable code
- Transparent documentation of AI usage builds trust and enables knowledge sharing

## 📊 Test Results

The framework currently includes 15 test cases across multiple scenarios:

- ✅ Login tests (6 cases): Valid/invalid credentials, empty fields
- ✅ Product tests (4 cases): Adding to cart, price display, sorting
- ✅ Checkout tests (1 case): Complete purchase flow
- ✅ Filter tests (4 cases): Sorting by name and price

All tests pass successfully, with comprehensive assertions and error handling.

## 🛠️ Development

### Adding New Tests
1. Create page objects in `src/pages/` following the POM pattern
2. Add test specifications in `tests/e2e/`
3. Update fixtures in `src/fixtures/` if needed
4. Run tests locally before committing

### Code Quality
- TypeScript for type safety
- ESLint/Prettier for code formatting
- Playwright's built-in assertions
- Comprehensive error handling

---

*Built with ❤️ using Playwright, TypeScript, and responsible AI assistance*
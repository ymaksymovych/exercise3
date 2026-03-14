// path: tests/e2e/login.spec.ts
import { test, expect } from '../../src/fixtures/BaseTest';
import { LoginPage } from '../../src/pages/LoginPage';

/**
 * Test suite for SauceDemo login functionality.
 * Test Case: TC-LOGIN-001
 */
test.describe('SauceDemo Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/); // Explicit check: Redirected to inventory
  });

  test('should show error for invalid username', async ({ page }) => {
    await loginPage.login('invalid_user', 'secret_sauce');
    await loginPage.expectErrorMessage('Username and password do not match any user in this service');
  });

  test('should show error for invalid password', async ({ page }) => {
    await loginPage.login('standard_user', 'wrong_password');
    await loginPage.expectErrorMessage('Username and password do not match any user in this service');
  });

  test('should show error for empty username', async ({ page }) => {
    await loginPage.login('', 'secret_sauce');
    await loginPage.expectErrorMessage('Username is required');
  });

  test('should show error for empty password', async ({ page }) => {
    await loginPage.login('standard_user', '');
    await loginPage.expectErrorMessage('Password is required');
  });

  test('should display correct page title', async ({ page }) => {
    const title = await loginPage.getPageTitle();
    expect(title).toBe('Swag Labs');
  });
});
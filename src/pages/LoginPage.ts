// path: src/pages/LoginPage.ts
import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

/**
 * Page Object for the SauceDemo login page.
 */
export class LoginPage extends BasePage {
  private usernameInput: InputComponent;
  private passwordInput: InputComponent;
  private loginButton: ButtonComponent;

  /**
   * Constructor for LoginPage.
   * @param page - The Playwright Page instance.
   */
  constructor(page: Page) {
    super(page);
    this.usernameInput = new InputComponent(page, page.getByRole('textbox', { name: /username/i }));
    this.passwordInput = new InputComponent(page, page.getByRole('textbox', { name: /password/i }));
    this.loginButton = new ButtonComponent(page, page.getByRole('button', { name: /login/i }));
  }

  /**
   * Navigates to the login page.
   */
  async goto(): Promise<void> {
    await this.navigateTo('https://www.saucedemo.com/');
  }

  /**
   * Logs in with the given credentials.
   * @param username - The username.
   * @param password - The password.
   */
  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Checks if the error message is visible with the given text.
   * @param message - The expected error message.
   */
  async expectErrorMessage(message: string): Promise<void> {
    const errorLocator = this.page.locator('[data-test="error"]');
    await expect(errorLocator).toBeVisible();
    await expect(errorLocator).toContainText(message);
  }

  /**
   * Checks if login was successful by verifying the URL.
   */
  async expectLoginSuccess(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory/);
  }

  /**
   * Gets the page title.
   * @returns The page title.
   */
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}
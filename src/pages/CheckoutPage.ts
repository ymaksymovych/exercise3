// path: src/pages/CheckoutPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

/**
 * Page Object for the checkout page.
 */
export class CheckoutPage extends BasePage {
  private firstNameInput: InputComponent;
  private lastNameInput: InputComponent;
  private zipInput: InputComponent;
  private continueButton: ButtonComponent;
  private finishButton: ButtonComponent;

  /**
   * Constructor for CheckoutPage.
   * @param page - The Playwright Page instance.
   */
  constructor(page: Page) {
    super(page);
    this.firstNameInput = new InputComponent(page, page.locator('#first-name'));
    this.lastNameInput = new InputComponent(page, page.locator('#last-name'));
    this.zipInput = new InputComponent(page, page.locator('#postal-code'));
    this.continueButton = new ButtonComponent(page, page.locator('#continue'));
    this.finishButton = new ButtonComponent(page, page.locator('#finish'));
  }

  /**
   * Fills the checkout information.
   * @param firstName - First name.
   * @param lastName - Last name.
   * @param zip - Zip code.
   */
  async fillInfo(firstName: string, lastName: string, zip: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipInput.fill(zip);
    await this.continueButton.click();
  }

  /**
   * Gets the item total amount.
   * @returns The item total price.
   */
  async total() {
    return await this.page.textContent('.summary_subtotal_label');
  }

  /**
   * Places the order.
   */
  async placeOrder() {
    await this.finishButton.click();
    await this.page.waitForTimeout(1000);
  }
}
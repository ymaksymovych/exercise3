// path: src/pages/CartPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object for the cart page.
 */
export class CartPage extends BasePage {
  /**
   * Constructor for CartPage.
   * @param page - The Playwright Page instance.
   */
  constructor(page: Page) {
    super(page);
  }

  /**
   * Clicks on the cart icon to view the cart.
   */
  async goToCart() {
    await this.page.click('.shopping_cart_link');
    await this.page.waitForTimeout(1000);
  }

  /**
   * Gets the cart count text.
   * @returns The cart count.
   */
  async getCartCount() {
    return await this.page.textContent('.shopping_cart_badge');
  }

  /**
   * Gets the product name in the cart.
   * @returns The product name.
   */
  async getProductName() {
    return await this.page.textContent('.cart-product-name');
  }

  /**
   * Removes an item from the cart by name.
   * @param name - The product name.
   */
  async removeItem(name: string): Promise<void> {
    const button = this.page.locator(`[data-test="remove-${name.toLowerCase().replace(/\s+/g, '-')}"]`);
    await button.click();
    await this.page.waitForTimeout(1000); // Keep for stability, but could optimize
  }

  /**
   * Gets the empty cart message.
   * @returns The empty message.
   */
  async getEmptyMessage() {
    return await this.page.textContent('.cart-empty');
  }

  /**
   * Gets the list of items in the cart.
   * @returns Array of item names.
   */
  async items() {
    return await this.page.locator('.cart_item .inventory_item_name').allTextContents();
  }

  /**
   * Proceeds to checkout.
   */
  async proceedToCheckout() {
    await this.page.click('#checkout');
    await this.page.waitForTimeout(1000);
  }
}
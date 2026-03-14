// path: src/pages/InventoryPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object for the inventory page.
 */
export class InventoryPage extends BasePage {
  /**
   * Constructor for InventoryPage.
   * @param page - The Playwright Page instance.
   */
  constructor(page: Page) {
    super(page);
  }

  /**
   * Clicks on the product by name.
   * @param name - The product name.
   */
  async productResult(name: string): Promise<void> {
    await this.page.click(`text=${name}`);
  }

  /**
   * Adds a product to cart by name.
   * @param name - The product name.
   */
  async addToCart(name: string): Promise<void> {
    const button = this.page.locator(`[data-test="add-to-cart-${name.toLowerCase().replace(/\s+/g, '-')}"]`);
    await button.click();
  }

  /**
   * Gets the price of a product by name.
   * @param name - The product name.
   * @returns The price.
   */
  async getProductPrice(name: string): Promise<string | null> {
    const item = this.page.locator('.inventory_item').filter({ hasText: name });
    return await item.locator('.inventory_item_price').textContent();
  }

  /**
   * Selects the sort option.
   * @param option - The sort option value (e.g., 'az', 'za', 'lohi', 'hilo').
   */
  async selectSort(option: string): Promise<void> {
    await this.page.selectOption('select.product_sort_container', option);
    await this.page.waitForTimeout(1000);
  }

  /**
   * Gets all product prices in order.
   * @returns Array of prices as numbers.
   */
  async getAllPrices(): Promise<number[]> {
    const priceTexts = await this.page.locator('.inventory_item_price').allTextContents();
    return priceTexts.map(price => parseFloat(price.replace('$', '')));
  }

  /**
   * Gets all product names in order.
   * @returns Array of names.
   */
  async getAllNames(): Promise<string[]> {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }
}
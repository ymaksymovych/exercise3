// path: src/components/HeaderComponent.ts
import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

/**
 * Component for the header.
 */
export class HeaderComponent extends BaseComponent {
  /**
   * Constructor for HeaderComponent.
   * @param page - The Playwright Page instance.
   * @param locator - The Locator for the header.
   */
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  /**
   * Gets the cart badge count.
   * @returns The badge count.
   */
  async cartBadge() {
    return await this.page.textContent('.shopping_cart_badge');
  }
}
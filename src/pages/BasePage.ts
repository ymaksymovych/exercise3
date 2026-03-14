// path: src/pages/BasePage.ts
import { Page } from '@playwright/test';

/**
 * Base class for all page objects, providing common functionality.
 */
export class BasePage {
  protected page: Page;

  /**
   * Constructor for BasePage.
   * @param page - The Playwright Page instance.
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to the specified URL.
   * @param url - The URL to navigate to.
   */
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Waits for the page to load completely.
   */
  async waitForLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}
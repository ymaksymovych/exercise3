// path: src/components/BaseComponent.ts
import { Locator, Page } from '@playwright/test';

/**
 * Base class for all component objects, providing common functionality.
 */
export class BaseComponent {
  protected page: Page;
  protected locator: Locator;

  /**
   * Constructor for BaseComponent.
   * @param page - The Playwright Page instance.
   * @param locator - The Locator for the component.
   */
  constructor(page: Page, locator: Locator) {
    this.page = page;
    this.locator = locator;
  }

  /**
   * Checks if the component is visible.
   * @returns True if visible, false otherwise.
   */
  async isVisible(): Promise<boolean> {
    return await this.locator.isVisible();
  }

  /**
   * Waits for the component to be visible.
   */
  async waitForVisible(): Promise<void> {
    await this.locator.waitFor({ state: 'visible' });
  }
}
// path: src/components/ButtonComponent.ts
import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

/**
 * Component for buttons.
 */
export class ButtonComponent extends BaseComponent {
  /**
   * Constructor for ButtonComponent.
   * @param page - The Playwright Page instance.
   * @param locator - The Locator for the button element.
   */
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  /**
   * Clicks the button.
   */
  async click(): Promise<void> {
    await this.locator.click();
  }
}
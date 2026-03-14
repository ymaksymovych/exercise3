// path: src/components/InputComponent.ts
import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

/**
 * Component for input fields.
 */
export class InputComponent extends BaseComponent {
  /**
   * Constructor for InputComponent.
   * @param page - The Playwright Page instance.
   * @param locator - The Locator for the input element.
   */
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  /**
   * Fills the input with the given value.
   * @param value - The value to fill.
   */
  async fill(value: string): Promise<void> {
    await this.locator.fill(value);
  }

  /**
   * Gets the value of the input.
   * @returns The current value.
   */
  async getValue(): Promise<string> {
    return await this.locator.inputValue();
  }
}
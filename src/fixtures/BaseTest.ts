// path: src/fixtures/BaseTest.ts
import { test as baseTest } from '@playwright/test';
import { Logger } from '../utils/logger';

/**
 * Base test fixture with common setup and teardown.
 */
export const test = baseTest.extend({
  // Add custom fixtures here if needed
});

test.beforeEach(async ({ page }) => {
  Logger.info('Starting test setup');
  // Add common setup logic here, e.g., login, navigation
});

test.afterEach(async ({ page }) => {
  Logger.info('Starting test teardown');
  // Add common teardown logic here, e.g., cleanup
});

export { expect } from '@playwright/test';
// path: tests/e2e/filter.spec.ts
import { test, expect } from '../../src/fixtures/BaseTest';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';

/**
 * Test suite for SauceDemo inventory filtering functionality.
 * Test Case: TC-FILTER-001
 */
test.describe('SauceDemo Inventory Filtering', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/); // Explicit check: Login successful
  });

  test('should sort products by price low to high', async ({ page }) => {
    await inventoryPage.selectSort('lohi');
    const prices = await inventoryPage.getAllPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices); // Explicit check: Prices are sorted ascending
  });

  test('should sort products by price high to low', async ({ page }) => {
    await inventoryPage.selectSort('hilo');
    const prices = await inventoryPage.getAllPrices();
    const sortedPrices = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sortedPrices); // Explicit check: Prices are sorted descending
  });

  test('should sort products by name A to Z', async ({ page }) => {
    await inventoryPage.selectSort('az');
    const names = await inventoryPage.getAllNames();
    const sortedNames = [...names].sort();
    expect(names).toEqual(sortedNames); // Explicit check: Names are sorted alphabetically
  });

  test('should sort products by name Z to A', async ({ page }) => {
    await inventoryPage.selectSort('za');
    const names = await inventoryPage.getAllNames();
    const sortedNames = [...names].sort().reverse();
    expect(names).toEqual(sortedNames); // Explicit check: Names are sorted reverse alphabetically
  });
});
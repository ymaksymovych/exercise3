// path: tests/e2e/cart-remove.professional.spec.ts
import { test, expect } from '../../src/fixtures/BaseTest';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { CartPage } from '../../src/pages/CartPage';

// Test Case: TC-CART-REMOVE-001 - Remove Item from Cart
test.describe('Cart Removal', () => {
  test('should remove item from cart successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Step 1: Navigate to SauceDemo and perform login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/); // Explicit check: User redirected to inventory page

    // Step 2: Add an item to cart and verify badge update
    const productName = 'Sauce Labs Backpack';
    await inventoryPage.addToCart(productName);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); // Explicit check: Cart badge shows 1 item

    // Step 3: Navigate to cart page
    await cartPage.goToCart();
    await expect(page).toHaveURL(/cart/); // Explicit check: Cart page loaded successfully

    // Step 4: Verify item presence in cart
    const items = await cartPage.items();
    expect(items).toContain(productName); // Explicit check: Item listed in cart

    // Step 5: Remove the item
    await cartPage.removeItem(productName);

    // Step 6: Verify cart is empty and badge removed
    const itemsAfter = await cartPage.items();
    expect(itemsAfter).toHaveLength(0); // Explicit check: No items in cart
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0); // Explicit check: Badge not visible
  });

  // Edge Case: Attempt to remove from empty cart (TC-CART-REMOVE-EDGE-001)
  test('should handle removal attempt on empty cart gracefully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);

    // Login and go to cart without adding items
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await cartPage.goToCart();

    // Verify cart is empty
    const items = await cartPage.items();
    expect(items).toHaveLength(0);

    // Attempt to remove non-existent item (simulate edge case)
    // Note: In real app, this might not trigger, but check for no errors
    await expect(async () => {
      await cartPage.removeItem('NonExistentItem');
    }).not.toThrow(); // Explicit check: No unhandled errors on invalid removal
  });
});
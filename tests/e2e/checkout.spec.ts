// path: tests/e2e/checkout.spec.ts
import { test, expect } from '../../src/fixtures/BaseTest';
import { LoginPage } from '../../src/pages/LoginPage';
import { CartPage } from '../../src/pages/CartPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';
import { HeaderComponent } from '../../src/components/HeaderComponent';

test('complete checkout flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const header = new HeaderComponent(page, page.locator('.header'));

  // Initialization: login and open inventory page
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.expectLoginSuccess();

  const productName = 'Sauce Labs Backpack';

  // Get the product price dynamically
  const expectedPrice = await inventoryPage.getProductPrice(productName);
  expect(expectedPrice).not.toBeNull();

  // User actions: add product to cart
  await inventoryPage.addToCart(productName);

  // Verification: cart badge increments
  const badge = await header.cartBadge();
  expect(badge).toBe('1');
  await loginPage.waitForTimeout(2000);

  // User actions: proceed to checkout
  await cartPage.goToCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.fillInfo('John', 'Doe', '12345');

  // Verification: total matches expected price
  const total = await checkoutPage.total();
  expect(total).toContain(expectedPrice);
});
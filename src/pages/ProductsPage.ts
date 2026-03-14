// path: src/pages/ProductsPage.ts
import { Page } from '@playwright/test';

export class ProductPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addToCart() {
    await this.page.click('#add-to-cart');
    await this.page.waitForTimeout(1000);
  }

  async selectSize(size: 'S' | 'M') {
    await this.page.click(`text=${size}`);
    await this.page.waitForTimeout(500);
  }

  async selectColor(color: string) {
    await this.page.click(`[data-color="${color}"]`);
    await this.page.waitForTimeout(500);
  }

  async getProductTitle() {
    return await this.page.textContent('.product-title');
  }

  async title() {
    return await this.page.textContent('.product-title');
  }

  async price() {
    return await this.page.textContent('.product-price');
  }

  async openReviews() {
    await this.page.click('#reviews');
  }
}
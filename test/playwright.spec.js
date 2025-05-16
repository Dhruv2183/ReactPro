const { test, expect } = require('@playwright/test');

test.describe('Stone Table Website Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000'); 
  });

  test('Homepage loads correctly', async ({ page }) => {
    await expect(page).toHaveTitle(/Stone Table|Home/);
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('.hero-section')).toBeVisible();
  });

  test('Product grid displays items', async ({ page }) => {
    const productCards = await page.locator('.product-card');
    await expect(productCards).not.toHaveCount(0);
    await expect(productCards.first()).toBeVisible();
  });

  test('Navigation to contact page works', async ({ page }) => {
    await page.click('text=Contact');
    await expect(page).toHaveURL(/contact/);
    await expect(page.locator('form#contact-form')).toBeVisible();
  });

  test('Mobile menu toggle works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); 
    await page.click('.menu-toggle');
    await expect(page.locator('.mobile-nav')).toBeVisible();
  });
});
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductPage } from '../pages/ProductPage.js';
import { CartPage } from '../pages/CartPage.js';

test('verify user can add backpack to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('/');

    await loginPage.login('standard_user', 'secret_sauce');

    const productPage = new ProductPage(page);

    await productPage.addToCart();

    const cartPage = new CartPage(page);

    await cartPage.openCart();

    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    await expect(
        page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveText('1');

    });
test('verify user can remove backpack from cart', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('/');

    await loginPage.login('standard_user', 'secret_sauce');

    const productPage = new ProductPage(page);

    await productPage.addToCart();

    const cartPage = new CartPage(page);

    await cartPage.openCart();

    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    await cartPage.removeBackpack();

    await expect(page.getByText('Sauce Labs Backpack')).toBeHidden();

});

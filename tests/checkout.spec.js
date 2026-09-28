import { test, expect } from '../fixtures/test.js';

test('verify user can complete checkout successfully', async ({
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
    checkoutCompletePage
}) => {

    // Login
    await loginPage.page.goto('/');

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Add product
    await productPage.addToCart();

    // Open cart
    await cartPage.openCart();

    await expect(
        cartPage.backpack
    ).toBeVisible();

    // Checkout
    await checkoutPage.clickCheckout();

    // Enter customer details
    await checkoutPage.enterCustomerDetails(
        'Vinay',
        'Raut',
        '411001'
    );

    // Continue
    await checkoutPage.clickContinue();

    // Verify checkout overview
    await expect(
        checkoutPage.backpack
    ).toBeVisible();

    // Finish order
    await checkoutPage.clickFinish();

    // Verify confirmation
    await checkoutCompletePage.verifyOrderConfirmation();

    await expect(
        checkoutCompletePage.orderConfirmation
    ).toBeVisible();
});
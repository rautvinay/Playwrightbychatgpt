export class CartPage {

    constructor(page) {
        this.page = page;

        this.cartButton = page.locator('[data-test="shopping-cart-link"]');
        this.backpack = page.getByText('Sauce Labs Backpack');
        this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    }

    async openCart() {
        await this.cartButton.click();
    }

    async removeBackpack() {
        await this.removeBackpackButton.click();
    }

}
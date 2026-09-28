export class CheckoutPage {

    constructor(page) {
        this.page = page;

        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });

        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');

        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.finishButton = page.getByRole('button', { name: 'Finish' });

        this.backpack = page.locator('[data-test="inventory-item"]').filter({
            hasText: 'Sauce Labs Backpack'
        });
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

    async enterCustomerDetails(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickFinish() {
        await this.finishButton.click();
    }
}
export class CheckoutCompletePage {

    constructor(page) {
        this.page = page;

        this.orderConfirmation = page.getByText('Thank you for your order');
    }

    async verifyOrderConfirmation() {
        await this.orderConfirmation.waitFor();
    }
}
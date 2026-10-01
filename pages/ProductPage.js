export class ProductPage{
    constructor (page){
        this.page = page;
        this.backpack = page.getByText('Sauce Labs Backpack');
         this.backpackCard = page.locator('[data-test="inventory-item"]').filter({
        hasText: 'Sauce Labs Backpack'});
        this.addToCartButton = this.backpackCard.getByRole('button', { name: 'Add to cart' });
         }
        async addToCart() {
        await this.addToCartButton.click();
        }
        async verifyBackpackCard() {
        await this.backpackCard.scrollIntoViewIfNeeded();
        await this.backpackCard.highlight();
        }
    }

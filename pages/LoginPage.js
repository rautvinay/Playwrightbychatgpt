import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccessful() {
        await expect(
            this.page.getByText('Products', { exact: true })
        ).toBeVisible();
    }

}
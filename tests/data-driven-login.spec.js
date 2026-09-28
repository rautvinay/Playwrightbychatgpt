import { test, expect } from '../fixtures/test.js';
import { LoginPage } from '../pages/LoginPage.js';
import { loginData } from '../test-data/loginData.js';

for (const data of loginData) {

    test(`login test - ${data.expectedResult}`, async ({ loginPage }) => {

        await loginPage.page.goto('/');

        await loginPage.login(
            data.username,
            data.password
        );

        if (data.expectedResult === 'success') {

            await expect(
                loginPage.page.getByText('Products')
            ).toBeVisible();

        } else {

            await expect(
                loginPage.page.getByText(
                    'Username and password do not match any user in this service'
                )
            ).toBeVisible();
        }
    });
}
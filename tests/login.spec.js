import {test, expect} from'@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
test.describe('Login Tests',()=>{
test.beforeEach(async({page}) =>{
    await page.goto('/');
});

test ('verify succsessful login ',async({page}) =>{

    const loginPage = new LoginPage(page);
    //await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');
    await expect (page.getByText('Products')).toBeVisible();
});
test('verify invalid credential',async({page})=>{
    const loginpage = new LoginPage(page)
    await loginpage.login('wrong_user','wrong_password');
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

});

});
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { environments } from '../config/environments.js';

const environment = process.env.ENV || 'qa';
const testData = environments[environment];

test.describe('Login Tests', () => {

    test.beforeAll(async () => {
        console.log('BEFORE ALL - Running once');
    });

    test.beforeEach(async ({ page }) => {
        console.log('BEFORE EACH - Running before every test');
        await page.goto('/');
    });

    test('verify successful login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(
    testData.username,
    testData.password
);
        await loginPage.verifyLoginSuccessful();
    });

    test('verify invalid login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login('wrong_user', 'wrong_password');
        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    });

    test.afterEach(async () => {
        console.log('AFTER EACH - Running after every test');
    });

    test.afterAll(async () => {
        console.log('AFTER ALL - Running once');
    });

});
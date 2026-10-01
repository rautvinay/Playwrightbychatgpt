import { test, expect } from '@playwright/test';

test('handle new tab opened by application', async ({ browser }) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://the-internet.herokuapp.com/windows');

    const newPagePromise = context.waitForEvent('page');

    await page.getByText('Click Here').click();

    const newPage = await newPagePromise;

    await newPage.waitForLoadState();

    console.log('Main page title:', await page.title());
    console.log('New tab title:', await newPage.title());

    await expect(newPage.getByText('New Window')).toBeVisible();

    await context.close();

});
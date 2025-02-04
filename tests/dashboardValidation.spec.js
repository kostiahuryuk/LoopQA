const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const testData = require('../data/testData.json');
const { Dashboard } = require("../pages/dashboard");

test.describe('Login and Task Verification', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToAppUrl('https://animated-gingersnap-8cf7f2.netlify.app/');
        await loginPage.login('admin', 'password123');
    });

    testData.forEach((testCase) => {
        test(testCase.name, async ({ page }) => {
            const dashboard = new Dashboard();
            await page.click(`text=${testCase.app}`);
            await dashboard.verifyTaskAndTags(page, testCase);
        });
    });
});
const {expect} = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async navigateToAppUrl(url) {
        await this.page.goto(url);
    }

    async login(email, password) {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}

module.exports = {LoginPage};
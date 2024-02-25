import { expect, type Locator, type Page } from '@playwright/test';

export const email = "marian.kolobych@euristiq.com", password = "PASSWo5?";
export const websiteURL = "https://portal-ui-dev1.dev.dts-dsa.com/auth/sign-in";

export class SignInPage {
    readonly page: Page;
    readonly loginEmailField: Locator;
    readonly loginPasswordField: Locator;
    readonly sigInButton: Locator;
    readonly dashboardTitle: Locator;
    readonly userProfileDropDown: Locator;
    readonly signOutButton: Locator;
    readonly signInTitle: Locator;
    readonly supportLink: Locator;
    readonly aboutUsLink: Locator;
    readonly privacyPolicyLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginEmailField = page.locator('xpath=//input[@id="email"]');
        this.loginPasswordField = page.locator('xpath=//input[@id="password"]');
        this.sigInButton = page.locator('xpath=//button[@type="submit"][@class="button size-l primary"]');
        this.dashboardTitle = page.locator('xpath=//h1[@class="title"][text()="Dashboard"]');
        this.userProfileDropDown = page.locator('xpath=//button[@id="current-user"]');
        this.signOutButton = page.locator('xpath=//div[@class="cdk-overlay-container"]//button[2]');
        this.signInTitle = page.locator('xpath=//h1[text()="Sign In to Midy Portal"]');
        this.supportLink = page.locator('li:nth-child(1) a:nth-child(1) span:nth-child(1)');
        this.aboutUsLink = page.locator('li:nth-child(2) a:nth-child(1) span:nth-child(1)');
        this.privacyPolicyLink = page.locator('//a[@class="link"]//span[@class="label"][normalize-space()="Privacy Policy"]');
    };

    async goto() {
        await this.page.goto(websiteURL);
    };

    async SignIntoBP() {
        await this.page.goto(websiteURL);
        await this.loginEmailField.fill(email);
        await this.loginPasswordField.fill(password);
        await this.sigInButton.click();
    };

};
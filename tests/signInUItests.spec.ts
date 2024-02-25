import { test, expect } from '@playwright/test';
import { SignInPage } from '../pageObjects/signIn';

test.describe("Sign-in flows", () => {
    test("User can Sign-in/Sign-out from the Portal", async ({ page }) => {
        const signInPage = new SignInPage(page);
        await signInPage.SignIntoBP();
        await expect(signInPage.dashboardTitle).toHaveText("Dashboard");

        await signInPage.userProfileDropDown.click();
        await signInPage.signOutButton.click();
        await expect(signInPage.signInTitle).toHaveText("Sign In to Midy Portal111");
    });
});

test.describe("User can view", () => {
    test("Support documentation link", async ({ page, context }) => {
        const signInPage = new SignInPage(page);
        await signInPage.goto();
        await signInPage.supportLink.click();
        await page.waitForTimeout(3000);//need wait till contect load in the new tab;
        const pages = await context.pages();

        await expect(pages[1]).toHaveTitle("Midy Developer");
        await expect(pages[1]).toHaveURL("https://consumer-core-qa.dev.dts-dsa.com/static/dev-lite/");
        await expect(pages[1]).toHaveScreenshot({ fullPage: true });
    });

    test("Privacy Policy documentation link", async ({ page, context }) => {
        const signInPage = new SignInPage(page);
        await signInPage.goto();
        await signInPage.privacyPolicyLink.click();
        await page.waitForTimeout(3000);//need wait till contect load in the new tab;
        const pages = await context.pages();

        await expect(pages[1]).toHaveTitle("Privacy Policy");
        await expect(pages[1]).toHaveURL("https://dsa-dev-dts-consumer-admin-dev3-legal-service.s3.us-east-2.amazonaws.com/2023-11-27T08%3A48%3A04.136Z__bp_privacy_policy-2023-11-24.html");
        await expect(pages[1]).toHaveScreenshot({ fullPage: true });
    });
});
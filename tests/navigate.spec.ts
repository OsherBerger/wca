import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ApplicationURL } from '../helpers/ApplicationURL';

test.describe('Testing the navigation bar', () => {

    test('should navigate through all buttons and validate', async ({ page }) => {
        const homePage = new HomePage(page);

        // Map buttons to their expected URLs for efficient iteration
        const buttonToUrlMap = {
            AboutUsButton: ApplicationURL.ABOUT_US_URL,
            CompetitionsButton: ApplicationURL.COMPETITIONS_URL,
            MerchandiseButton: ApplicationURL.MERCHANDISE_URL,
            RecordsButton: ApplicationURL.RECORDS_URL,
            FAQButton: ApplicationURL.FAQ_URL
        };

        // Get all buttons
        const buttons = homePage.getButtons();

        // Iterate through each button and its expected URL
        for (const [buttonName, expectedUrl] of Object.entries(buttonToUrlMap)) {
            await test.step(`Go to homepage before clicking ${buttonName}`, async () => {
                // Go to homepage at the start of each iteration
                await page.goto(ApplicationURL.BASE_URL); // Navigate to the homepage
                await homePage.validatePageUrl(ApplicationURL.BASE_URL); // Validate you're on the homepage
            });

            await test.step(`Click ${buttonName} and validate URL`, async () => {
                const button = buttons[buttonName]; // Fetch the button locator
                await homePage.clickButton(button); // Click the button
                await homePage.validatePageUrl(expectedUrl); // Validate the resulting URL
            });
        }
    });
});

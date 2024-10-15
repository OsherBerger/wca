import { Locator, Page } from "@playwright/test";
import { BasePage } from "./Base/BasePage";
import { LocatorsList } from "../helpers/LocatorsList";

export class HomePage extends BasePage {
    private AboutUsButton: Locator;
    private CompetitionsButton: Locator;
    private MerchandiseButton: Locator;
    private RecordsButton: Locator;
    private FAQButton: Locator;

    constructor(protected page: Page) {
        super(page);
        this.AboutUsButton = this.page.locator(LocatorsList.AboutUsButton);
        this.CompetitionsButton = this.page.locator(LocatorsList.CompetitionsButton);
        this.MerchandiseButton = this.page.locator(LocatorsList.MerchandiseButton);
        this.RecordsButton = this.page.locator(LocatorsList.RecordsButton);
        this.FAQButton = this.page.locator(LocatorsList.FAQButton);
    }

    // Method to click any button passed as argument
    public async clickButton(button: Locator) {
        await this.clickElement(button);
    }

    // Method to return all buttons as a map for efficient iteration
    public getButtons() {
        return {
            AboutUsButton: this.AboutUsButton,
            CompetitionsButton: this.CompetitionsButton,
            MerchandiseButton: this.MerchandiseButton,
            RecordsButton: this.RecordsButton,
            FAQButton: this.FAQButton
        };
    }
}

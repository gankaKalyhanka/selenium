import {By, until, WebDriver} from "selenium-webdriver";
import {BasePage} from "./basepage";
import {expect} from "chai";

export class CurrencyPage extends BasePage {

    public currencyLink: any;
    public currencyConverter: any;

    constructor(protected driver: WebDriver) {
        super(driver);
        this.currencyLink = driver.findElement(By.xpath("[class*=js-currency-widget] [class=b-top-navigation-informers__link]"));
        this.currencyConverter = driver.findElement(By.id(`converter-option`));
    }

    async openCurrencyLink(): Promise<void> {
        await this.currencyLink.click()
    };

    async waitUntilElement(): Promise<void> {
        await this.driver.wait(until.elementLocated(this.currencyConverter("in")), 3000);
    };

    async validateConverter(): Promise<void> {
        await expect(await this.driver.findElement(this.currencyConverter("out"))).exist;
    };
}

import {By, until, WebDriver, WebElement} from "selenium-webdriver";
import {BasePage} from "./basepage";
import {expect} from "chai";

export class RealEstate extends BasePage {

    public realEstate: any;
    public realEstateElement: any;
    public flatPrice: any;

    constructor(protected driver: WebDriver) {
        super(driver);
        this.realEstate = driver.findElement(By.xpath('//*[@id="container"]/div/div/header/div[2]/div/nav/ul[1]/li[4]/a/span'));
        this.realEstateElement = driver.findElement(By.xpath('//*[@id="search-filter-results"]/div[1]/div/div[2]/div[1]/a'));
        this.flatPrice = driver.findElement(By.xpath("//*[@class='apartment-bar__price-value apartment-bar__price-value_complementary']"));
    }

    async clickOnRealEstateLink(): Promise<void> {
        await this.realEstate.click()
    };

    async openParticularFlat(): Promise<void> {
        await this.realEstateElement.click()
    };

    async validatePrice(): Promise<void> {
        await expect(await this.flatPrice.getText()).exist
    };
};

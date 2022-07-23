import {By, WebDriver} from "selenium-webdriver";

export class BasePage {
    public logo: any;

    constructor(protected driver: WebDriver) {
        this.logo = driver.findElement(By.className("b-top-logo"))
    };

    async visitPage(url: string) {
        await this.driver.manage().window().maximize();
        await this.driver.get(url)
    };

    async closeBrowser() {
        await this.driver.quit()
    };

    async returnToMainPage() {
        await this.driver.findElement(this.logo()).click();
    };

}

import {By, until, WebDriver, WebElement} from "selenium-webdriver";
import {BasePage} from "./BasePage";
import {expect} from "chai";

export class CartPage extends BasePage {

    public cart: any;
    public emptyCartMessage: any;


    constructor(protected driver: WebDriver) {
        super(driver);
        this.cart = driver.findElement(By.xpath("//*[@title='Корзина']"));
        this.emptyCartMessage = driver.findElement(By.xpath("//*[@class='cart-message__title cart-message__title_big']"));
    }

    async openCart(): Promise<void> {
        await this.cart.click()
    };

    async expectedErrorMessage(): Promise<void> {
        await expect(await this.emptyCartMessage.getText()).contain('Ваша корзина пуста')
    };
};

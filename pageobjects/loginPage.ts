import {By, WebDriver} from "selenium-webdriver";
import {BasePage} from "./basepage";
import {expect} from "chai";

export class LoginPage extends BasePage {

    public loginPage: any;
    public login: any;
    public password: any;
    public submitButton: any;
    public errorMessage: any;

    constructor(protected driver: WebDriver) {
        super(driver);
        this.login = driver.findElement(By.xpath("//*[@placeholder='Ник или e-mail']"));
        this.password = driver.findElement(By.xpath("//*[@placeholder='Пароль']"));
        this.loginPage = driver.findElement(By.xpath("//*[@class='auth-bar__item auth-bar__item--text']"));
        this.submitButton = driver.findElement(By.xpath('//*[@id="auth-container"]/div/div[2]/div/form/div[3]/button'));
        this.errorMessage = driver.findElement(By.xpath('//*[@class="auth-form__description auth-form__description_error auth-form__description_base auth-form__description_extended-other"]'));
        }

    async getLoginPage(): Promise<void> {
            await this.loginPage.click()
        };

    async enterLogin(): Promise<void> {
        await this.login.sendKeys('vzhuch13@gmail.com')
    };

    async enterPassword(): Promise<void> {
        await this.password.sendKeys('vzhuch')
    };

    async pressSubmitButton(): Promise<void> {
        await this.submitButton.click()
    };


    async expectedErrorMessage(): Promise<void> {
        await expect(await this.errorMessage.getText()).contain('Неверный логин или пароль')
    };
    };



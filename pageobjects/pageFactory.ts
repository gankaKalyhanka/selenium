import {WebDriver} from "selenium-webdriver";
import {LoginPage} from "./loginPage";
import {BasePage} from "./basepage";
import {CartPage} from "./cartPage";
import {RealEstate} from "./realEstatePage";
import {CurrencyPage} from "./currencyPage";

export class PageFactory {
    static runningTests(driver: WebDriver, pageName: string) {
        switch (pageName) {
            case "BasePage":
                return new BasePage(driver);
            case "Login":
                return new LoginPage(driver);
            case "Cart":
                return new CartPage(driver)
            case "RealEstate":
                return new RealEstate(driver);
            case "Currency":
                return new CurrencyPage(driver);
           default:
                return new BasePage(driver);
        }
    }
}

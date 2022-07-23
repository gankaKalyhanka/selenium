import { Builder, until, WebDriver } from "selenium-webdriver";
import {after, before} from "mocha";
import {expect} from "chai";
import {URL} from "../support/urls";
import {PageFactory} from "../pageobjects/pageFactory";
import {LoginPage} from "../pageobjects/loginPage";
import {CartPage} from "../pageobjects/cartPage";
import {RealEstate} from "../pageobjects/realEstatePage";
import {CurrencyPage} from "../pageobjects/currencyPage";

describe('Onliner', () => {
  let driver: WebDriver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().setTimeouts({implicit: 10000});
    await driver.manage().setTimeouts({pageLoad: 10000});
    await driver.manage().window().maximize();
  });

  beforeEach(async () => {
    await PageFactory.runningTests(driver, "BasePage").visitPage(URL.base)
  });


    it(`currency page open`, async () => {
      const currencyPage = await PageFactory.runningTests(driver, "CurrencyPage") as CurrencyPage
      await currencyPage.openCurrencyLink()
      await currencyPage.waitUntilElement()
      await currencyPage.validateConverter()
      const currentUrl = await driver.getCurrentUrl();
      await expect(URL.currency).equal(currentUrl);

    });


    it(`return to the basepage`, async () => {
      const currencyPage = await PageFactory.runningTests(driver, "CurrencyPage") as CurrencyPage
      await driver.get(URL.currency);
      await currencyPage.waitUntilElement()
      await PageFactory.runningTests(driver, "BasePage").returnToMainPage()
      const currentUrl = await driver.getCurrentUrl();
      await expect(URL.base).equal(currentUrl);
    });


    it("open real estate page", async () => {
      const realEstate = await PageFactory.runningTests(driver, "RealEstate") as RealEstate
      await realEstate.clickOnRealEstateLink()
      await realEstate.openParticularFlat()
      await realEstate.validatePrice()
      const currentUrl = await driver.getCurrentUrl();
      await expect(URL.realEstate).equal(currentUrl);
    });


    it("open cart", async () => {
      const cart = await PageFactory.runningTests(driver, "Cart") as CartPage
      await cart.openCart()
      const currentUrl = await driver.getCurrentUrl();
      await expect(URL.cart).equal(currentUrl);
      await cart.expectedErrorMessage()
    });


    it("invalid login", async () => {
      const loginPage = await PageFactory.runningTests(driver, "Login") as LoginPage
      await loginPage.getLoginPage()
      await loginPage.enterLogin()
      await loginPage.enterPassword()
      await loginPage.pressSubmitButton()
      await loginPage.expectedErrorMessage()
    });



  after(async () => {
    await PageFactory.runningTests(driver, "BasePage").closeBrowser()
  })
})
import {By, until, WebDriver, WebElement} from 'selenium-webdriver';
import { elementTextContains } from 'selenium-webdriver/lib/until';
import { BasePage } from './basePage';

export class theVerge extends BasePage{
    contactPage: By = By.xpath('//a[text()="Contact"]');
    pleaseSelectButton: By = By.xpath('//select[@id="contact-reason-toggle"]');
    firstLastNameBox: By = By.xpath('//input[@id="info-name"]');
    emailAddressBox: By = By.xpath('//input[@id="info-email"]');
    theVergeUsernameBox: By = By.xpath('//input[@id="info-username"]');
    notRobotBox: By = By.xpath('//div[@class="recaptcha-checkbox-border"]');
    submitButton: By = By.xpath('//input[@id="submit-contact-form"]');
    facebookButton: By = By.xpath('//a[@class="facebook"]');
    twitterButton: By = By.xpath('//a[@class="twitter"]');
    accountButton: By = By.xpath('//a[@class="c-global-header__login-icon"]')
    logInButton: By = By.xpath('//li[@class="c-auth__tabs-sign-up"]');
    signUpButton: By = By.xpath('//a[text()="Sign Up"]');
    magnifyingGlass: By = By.xpath('//button[@class="c-global-header__search-trigger"]');
    searchBox: By = By.xpath('//input[@class="p-input-header__input"]');
    searchButton: By = By.xpath('//input[@class="p-input-header__link p-button"]');
    homeButton: By = By.xpath('//span[@class="sr-only"]')
    constructor() {
        super({url:"https://www.theverge.com"});
    }
};

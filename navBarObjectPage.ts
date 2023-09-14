import {By, until, WebDriver, WebElement} from 'selenium-webdriver';
import { elementTextContains } from 'selenium-webdriver/lib/until';
import { BasePage } from './basePage';

export class theVerge extends BasePage{     
    navBar: By = By.css('.duet--navigation--navigation'); 
    results: By = By.xpath('//ul[@class="flex items-end font-light"]');
    tech: By = By.xpath('(//a[@class="hover:opacity-50 hover:transition-all hover:ease-in-out"])[1]');
    reviews: By = By.xpath('(//a[@class="hover:opacity-50 hover:transition-all hover:ease-in-out"])[2]');
    science: By =By.xpath('(//a[@class="hover:opacity-50 hover:transition-all hover:ease-in-out"])[3]');
    entertaintment: By = By.xpath('(//a[@class="hover:opacity-50 hover:transition-all hover:ease-in-out"])[4]');
    homeButton: By = By.xpath('(//a[@*])[4]');
    moreButton: By = By.xpath('//span[@class="hidden md:inline"]');
    xButton: By = By.xpath('//button[@class="curser-pointer hover:opacity-60 hover:transition-all hover:ease-in-out"]');
    constructor() {
        super({url:"https://www.theverge.com"});
    }
};
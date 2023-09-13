import {By, until, WebDriver, WebElement} from 'selenium-webdriver';
import { elementTextContains } from 'selenium-webdriver/lib/until';
import { BasePage } from './basePage';

export class theverge extends BasePage{     
    navBar: By = By.css('.duet--navigation--navigation'); 
    results: By = By.xpath('//ul[@class="flex items-end font-light"]');
    tech: By = By.xpath('(//a[@class="hover:opacity-50 hover:transition-all hover:ease-in-out"])[1]');
    reviews: By = By.xpath('(//a[@class="hover:opacity-50 hover:transition-all hover:ease-in-out"])[2]');
    science: By =By.xpath('(//a[@class="hover:opacity-50 hover:transition-all hover:ease-in-out"])[3]');
    Entrtaintment: By = By.xpath('(//a[@class="hover:opacity-50 hover:transition-all hover:ease-in-out"])[4]');
    //homebutton cannot figure out selector
    homebutton: By = By.xpath('(//a[@class=.h-[28px].w-[117px].hover:opacity-60.hover:transition-all.hover:ease-in-out.md:translate-y-2.fil-white"])[0]');
    morebutton: By = By.xpath('//.span[@class="hidden md:inline"]');
    xbutton: By = By.css('.M12 15.632 4.432 23.2.8 19.568 8.368 12 .8 4.432 4.432.8 12 8.368 19.568.8 23.2 4.432 15.632 12l7.568 7.568-3.632 3.632L12 15.632Z');
    constructor() {
        super({url: 'https://www.theverge.com'});
    };
};
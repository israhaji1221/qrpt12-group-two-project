import {By, until, WebDriver, WebElement} from 'selenium-webdriver';
import { elementTextContains } from 'selenium-webdriver/lib/until';
import { BasePage } from './basePage';

//locators: Issues with seemingly all of them besides commentBtn. Need to narrow this down
export class theVerge extends BasePage{     
    commentBtn: By = By.xpath('//button[@class="duet--article--comments-link inline-block md:inline"]'); 
    textEdit: By = By.xpath('//div[@class="RTE-module-contentEditable-688e43131c6a8663430ddaef103cb60c coral coral-rte-content RTE-content-c061d9ac89ce61d18f3331eec2042e1f htmlContent-root-fe3506b39eaecd1a685ceda5e1292c4d"]');
    boldBtn: By = By.xpath('//button[@class="BaseButton-root-464189d43068742128bd39653c671d89 RTEButton-button-45f6da4988b793c4aae5b6d948e06a33"])[0]');
    italBtn: By = By.xpath('//button[@class="BaseButton-root-464189d43068742128bd39653c671d89 RTEButton-button-45f6da4988b793c4aae5b6d948e06a33"])[1]');
    quoteBtn: By = By.xpath('//button[@class="BaseButton-root-464189d43068742128bd39653c671d89 RTEButton-button-45f6da4988b793c4aae5b6d948e06a33"])[2]');
    bulletBtn: By = By.xpath('//button[@class="BaseButton-root-464189d43068742128bd39653c671d89 RTEButton-button-45f6da4988b793c4aae5b6d948e06a33"])[3]');
    strikeBtn: By = By.xpath('//button[@class="BaseButton-root-464189d43068742128bd39653c671d89 RTEButton-button-45f6da4988b793c4aae5b6d948e06a33"])[4]');
    spoilBtn: By = By.xpath('//button[@class="BaseButton-root-464189d43068742128bd39653c671d89 RTEButton-button-45f6da4988b793c4aae5b6d948e06a33"])[5]'); 
    constructor() {
        super({url:"https://www.theverge.com/23872896/f-zero-99-nintendo-direct-trailer"});
    }
};
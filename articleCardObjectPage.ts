import {By, until, WebDriver, WebElement} from 'selenium-webdriver';
import { elementTextContains } from 'selenium-webdriver/lib/until';
import { BasePage } from './basePage';

export class theVerge extends BasePage{     
    acrticleTital: By = By.xpath('(//div[@class="relative z-10 pt-[12px] sm:px-[16px] dark:border-none border-t-[3px] border-blurple dark:bg-transparent bg-white lg:mb-8 mr-[25px] sm:w-[440px] sm:ml-auto sm:mr-10 -mt-30 pr-12 hover:bg-[#FBF9FF]"])[2]')  
    author: By = By .xpath('//a[text()="Jennifer Pattison Tuohy"]')
    homeButton: By = By .xpath ('(//a[@*])[4]');
    timeStamp: By = By .xpath('(//div[@class="inline-block text-gray-63 dark:text-gray-94"])[2]')
    comments: By = By .xpath('(//span[text()="Comments"])[1]')
    xButton: By = By .xpath('//button[@class="float-right mr-12 mt-12"]')
    thumbnail: By = By .xpath('(//a[@class="block h-full w-full"])[9]') 
    constructor() {
        super({url:"https://www.theverge.com"});
    }
};
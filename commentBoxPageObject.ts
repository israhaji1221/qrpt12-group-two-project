import {By, until, WebDriver, WebElement} from 'selenium-webdriver';
import { elementTextContains } from 'selenium-webdriver/lib/until';
import { BasePage } from './basePage';

//locators: Issues with all selectors within iFrame
export class theVerge extends BasePage{     
    commentBtn: By = By.xpath('//button[@class="duet--article--comments-link inline-block md:inline"]'); 
    textEdit: By = By.xpath('//div[@class="RTE-module-contentEditable-688e43131c6a8663430ddaef103cb60c coral coral-rte-content RTE-content-c061d9ac89ce61d18f3331eec2042e1f htmlContent-root-fe3506b39eaecd1a685ceda5e1292c4d"]');
    boldBtn: By = By.xpath('(//button[@class="BaseButton-root-464189d43068742128bd39653c671d89 RTEButton-button-45f6da4988b793c4aae5b6d948e06a33"])[1]');
    italBtn: By = By.xpath('//button[@class="BaseButton-root-464189d43068742128bd39653c671d89 RTEButton-button-45f6da4988b793c4aae5b6d948e06a33"])[1]');
    quoteBtn: By = By.xpath('//button[@class="BaseButton-root-464189d43068742128bd39653c671d89 RTEButton-button-45f6da4988b793c4aae5b6d948e06a33"])[2]');
    bulletBtn: By = By.xpath('//button[@class="BaseButton-root-464189d43068742128bd39653c671d89 RTEButton-button-45f6da4988b793c4aae5b6d948e06a33"])[3]');
    strikeBtn: By = By.xpath('//button[@class="BaseButton-root-464189d43068742128bd39653c671d89 RTEButton-button-45f6da4988b793c4aae5b6d948e06a33"])[4]');
    spoilBtn: By = By.xpath('//button[@class="BaseButton-root-464189d43068742128bd39653c671d89 RTEButton-button-45f6da4988b793c4aae5b6d948e06a33"])[5]'); 
    sortBy: By = By.xpath('//span[@class="SelectField-root-e94ff23b61eac330857f4e86aa8f66bb coral coral-sortMenu"]')
    reply: By = By.xpath('(//button[@class=BaseButton-root-464189d43068742128bd39653c671d89 Button-base-3818d3c9d093073437f9d4751fbaac4e Button-flat-409c47973ce75cd86d40ebe592ee565e Button-fontSizeSmall-4e1ba350ee1ef655df8ddab86350c1ee Button-textAlignCenter-73a2738f6e39888509e0aca47606b75d Button-fontFamilyPrimary-5e7cc1810b6bcde618b0fd8adb2a5c64 Button-fontWeightPrimarySemiBold-5526f4e404413a488f7dc9d46867bf11 Button-paddingSizeExtraSmall-1a4f75aa7b8e2ce3a8d168ec4e60330e Button-colorSecondary-3bc2b7c29336486a6a4c1b67d199c162 CommentContainer-actionButton-471f207edf7f9f69483a5fac1602a4df coral coral-reactButton coral-comment-reactButton ReactionButton-button-f00bbe879a882dd9a0213477cbfbe691])[1]')
    closeBtn: By = By.xpath('//button[@class="float-right mr-12 mt-12"]'); 
    twitterBtn: By = By.xpath('(//button[@class="rounded-full bg-gray-e9 transition hover:bg-blurple"])[1]');
    fbBtn: By = By.xpath('(//button[@class="rounded-full bg-gray-e9 transition hover:bg-blurple"])[2]');
    linkBtn: By = By.xpath('(//button[@class="rounded-full bg-gray-e9 transition hover:bg-blurple"])[3]');
    authorBtn: By = By.xpath('(//a[@class="hover:shadow-underline-inherit"])[4]');
    authorName: By = By.xpath('//h1[@class="font-manuka text-100 leading-80 tracking-1 text-black dark:text-white md:text-160"]');
    constructor() {
        super({url:"https://www.theverge.com/23872896/f-zero-99-nintendo-direct-trailer"});
    }
};
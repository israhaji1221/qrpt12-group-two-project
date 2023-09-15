import {BasePage} from './basePage';
import {theVerge} from './articleCardObjectPage';
const page = new theVerge(); 
const fs = require('fs')

describe("Testing navBar", ()=> {
test('navigate to theverge', async () => {
await page.navigate();
    await page.getElement(page.acrticleTital);
    await page.click(page.acrticleTital);
    let acrticleTitalUrl = await page.driver.getCurrentUrl();
    expect (acrticleTitalUrl).toBe("https://www.theverge.com/2023/9/14/23871781/apple-iphone-15-pro-thread-radio-bluetooth");
    await page.getElement(page.comments);
    await page.click(page.comments);
    let commentsUrl = await page.driver.getCurrentUrl();
    expect(commentsUrl).toBe("https://www.theverge.com/2023/9/14/23871781/apple-iphone-15-pro-thread-radio-bluetooth?showComments=1");
    await page.getElement(page.xButton);
    await page.click(page.xButton);
await page.click(page.homeButton);
    let homeUrl = await page.driver.getCurrentUrl();
    expect(homeUrl).toBe("https://www.theverge.com/");
    await page.getElement(page.author);
    await page.click(page.author);
    let authorUrl = await page.driver.getCurrentUrl(); 
    expect(authorUrl).toBe("https://www.theverge.com/authors/jennifer-tuohy");
 await page.driver.quit();
});
});
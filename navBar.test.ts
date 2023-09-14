import {BasePage} from './basePage';
import {theVerge} from './navBarObjectPage';
const page = new theVerge(); 
const fs = require('fs')

describe("Testing navBar", ()=> {
test('navigate to theverge', async () => {
    await page.navigate();
    await page.getElement(page.tech);
    await page.click(page.tech);
    let techUrl = await page.driver.getCurrentUrl();
    expect (techUrl).toBe("https://www.theverge.com/tech");
    await page.getElement(page.tech);
    await page.click(page.homeButton);
    let homeUrl = await page.driver.getCurrentUrl();
    expect(homeUrl).toBe("https://www.theverge.com/");
    await page.getElement(page.reviews);
    await page.click(page.reviews);
    let reviewsUrl = await page.driver.getCurrentUrl(); 
    expect(reviewsUrl).toBe("https://www.theverge.com/reviews");
    await page.getElement(page.science);
    await page.click(page.science);
    let scienceUrl = await page.driver.getCurrentUrl();
    expect(scienceUrl).toBe("https://www.theverge.com/science");
    await page.getElement(page.entertaintment);
    await page.click(page.entertaintment);
    let entertaintmentUrl = await page.driver.getCurrentUrl();
    expect(entertaintmentUrl).toBe("https://www.theverge.com/entertainment");
    await page.getElement(page.moreButton);
    await page.click(page.moreButton);
    await page.getElement(page.xButton);
    await page.click(page.xButton);
    await page.click(page.homeButton);
    await page.driver.quit();
});
});
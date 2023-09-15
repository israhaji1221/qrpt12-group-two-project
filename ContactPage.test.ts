import {BasePage} from './basePage';
import {theVerge} from './contactPageObjectPage';
const page = new theVerge(); 
const fs = require('fs')

describe("Testing Contact Page", ()=> {
    afterAll: page.driver.quit
test('navigate to theverge and click contact page at the bottom of the page', async () => {
    await page.navigate();
    await page.getElement(page.contactPage);
    await page.click(page.contactPage);
    await page.getElement(page.);
    await page.click(page.);
});
})
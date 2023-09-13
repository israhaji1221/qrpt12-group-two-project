import {BasePage} from './basePage';
import {theverge} from './navBarObjectPage';
const page = new theverge(); 
const fs = require('fs')
test('navigate to theverge', async () => {
    await page.navigate();
    await page.getElement(page.tech);
    await page.click(page.tech);
    await page.getElement(page.tech);
    await page.click(page.homebutton);
});

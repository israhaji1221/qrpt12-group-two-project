import {BasePage} from './basePage';
import {theVerge} from './navBarObjectPage';
const page = new theVerge(); 
const fs = require('fs')
test('navigate to theVerge', async () => {
    await page.navigate();
    await page.getElement(page.tech);
    await page.click(page.tech);
    await page.getElement(page.tech);
    await page.click(page.homeButton);
    await page.getElement(page.reviews);
    await page.click(page.reviews);
    await page.getElement(page.science);
    await page.click(page.science);
    await page.getElement(page.entrtaintment);
    await page.click(page.entrtaintment);
    await page.getElement(page.moreButton);
    await page.click(page.moreButton);
    await page.getElement(page.xButton);
    await page.click(page.xButton);
});
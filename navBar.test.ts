import {BasePage} from './basePage';
import {theVerge} from './navBarObjectPage';
const page = new theVerge(); 
const fs = require('fs')
<<<<<<< HEAD
test('navigate to theVerge', async () => {
=======
test('navigate to theverge', async () => {
>>>>>>> 55ab211f4c1f9f4837e8b7e34db8a291d344ceb8
    await page.navigate();
    await page.getElement(page.tech);
    await page.click(page.tech);
    await page.getElement(page.tech);
<<<<<<< HEAD
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
=======
    await page.click(page.homebutton);
});
>>>>>>> 55ab211f4c1f9f4837e8b7e34db8a291d344ceb8

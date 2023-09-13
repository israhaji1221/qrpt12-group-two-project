import {BasePage} from './basePage';
import {theverge} from './navBarObjectPage';
const page = new theverge(); 
const fs = require('fs')
test('navigate to theverge', async () => {
    await BasePage.navigate();
    await BasePage.getElement(theverge.navBar);
    let text = await BasePage.getElement();
    

});

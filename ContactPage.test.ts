import {BasePage} from './basePage';
import {theVerge} from './navBarObjectPage';
const page = new theVerge(); 
const fs = require('fs')

describe("Testing Contact Page", ()=> {
    afterAll: page.driver.quit
test('', async () => {
    await page.navigate();
});
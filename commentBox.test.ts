import {BasePage} from './basePage';
import {theVerge} from './commentBoxPageObject';
import { By, until, WebDriver } from 'selenium-webdriver';  
const page = new theVerge(); 
const fs = require('fs')

//need to locate things to verify through expect on all tests
describe("Testing Comment Box", ()=> {
    afterAll: page.driver.quit
test('navigate to article page and click comment button', async () => {
    // need to set navigate to home page and access through top articles so article changes each time test is run
    await page.navigate();
    await page.getElement(page.commentBtn);
    await page.click(page.commentBtn);
    await page.getElement(page.closeBtn);
    await page.click(page.closeBtn);
});
    test('Click social media links and check destination popups', async () => {
     //need to figure out how to verify URL of popup
    await page.getElement(page.twitterBtn);
    await page.click(page.twitterBtn);
    //need to figure out how to verify URL of popup
    await page.getElement(page.fbBtn);
    await page.click(page.fbBtn);
    //Next interaction needs to compare text content
    await page.getElement(page.linkBtn);
    await page.click(page.linkBtn);
});
    test('Click author name and confirm correct destination page', async () => {
    //need to store button text in variable
    await page.getElement(page.authorBtn);
    await page.click(page.authorBtn);
    //need to expect authorName to match text value of authorBtn variable
    await page.getElement(page.authorName);
});
//issues with this test, I think it is because it exists within an iFrame.

// test('Type in comment box', async () => {
//     // await page.getElement(page.textEdit);
//     // await page.click(page.textEdit);
//     // await page.setInput(page.textEdit, 'This is some text');
// });

})

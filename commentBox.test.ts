import { stringify } from 'ts-jest';
import {BasePage} from './basePage';
import {theVerge} from './commentBoxPageObject';
import { By, until, WebDriver } from 'selenium-webdriver';  
import { titleContains } from 'selenium-webdriver/lib/until';
const page = new theVerge(); 
const fs = require('fs')

//need to locate things to verify through expect on all tests
describe("Testing Article page and Comment Box", ()=> {
    
        test('Click comment button', async () => {
            await page.navigate();
            await page.getElement(page.commentBtn);
            await page.click(page.commentBtn);
            let openBox = await page.driver.getCurrentUrl();
            expect (openBox).toContain("showComments");

            fs.writeFile(`${__dirname}/testResults.txt`, openBox, (e) =>{
                if (e) console.log(e);
                else console.log('Sucessfully Opened Comments');
            });
        });

        test('Click close button',async () => {
            await page.getElement(page.closeBtn);
            await page.click(page.closeBtn);
            let closeBox = await page.driver.getCurrentUrl();
            expect (closeBox).not.toContain("showComments");

            fs.writeFile(`${__dirname}/testResults.txt`, closeBox, (e) =>{
                if (e) console.log(e);
                else console.log('Successfully Closed Comments');
            });
        });

        test('Click social media links and check destination popups', async () => {
        //need to figure out how to verify URL of popup
            const originalWindow = await page.driver.getWindowHandle();
            await page.getElement(page.twitterBtn);
            await page.click(page.twitterBtn);
            await page.driver.wait(
                async () => (await page.driver.getAllWindowHandles()).length === 2, 10000
            );
            const windows = await page.driver.getAllWindowHandles();
            windows.forEach(async handle => {
            if (handle !== originalWindow) {
            await page.driver.switchTo().window(handle);
            }
            await page.driver.wait(until.titleIs('Log in to Twitter / X'), 10000);
            let twitterURLString = await page.driver.getCurrentUrl();
            await page.driver.switchTo().window(originalWindow)
            expect (twitterURLString).toContain("twitter.com/i/flow/login")
            fs.writeFile(`${__dirname}/testResults.txt`, twitterURLString, (e) =>{
                if (e) console.log(e);
                else console.log('Twitter Popup Accessed');
            });

            await page.getElement(page.fbBtn);
            await page.click(page.fbBtn);
            await page.getElement(page.linkBtn);
            await page.click(page.linkBtn);


        });

        test('Click author name and confirm correct destination page', async () => {
        //need to store button text in variable
            await page.getElement(page.authorBtn);
            await page.click(page.authorBtn);
        //need to expect authorName to match text value of authorBtn variable
            await page.getElement(page.authorName);


            await page.driver.quit();
        });
    });

//issues with this test, I think it is because it exists within an iFrame.

// test('Type in comment box', async () => {
//     // await page.getElement(page.textEdit);
//     // await page.click(page.textEdit);
//     // await page.setInput(page.textEdit, 'This is some text');
// });
})

import { stringify } from 'ts-jest';
import { BasePage } from './basePage';
import { theVerge } from './commentBoxPageObject';
import { By, until, WebDriver } from 'selenium-webdriver';
import { titleContains } from 'selenium-webdriver/lib/until';

const page = new theVerge();
const fs = require('fs');

describe("Testing Article page and Comment Box", () => {

    test('Click comment button', async () => {
        await page.navigate();
        await page.getElement(page.commentBtn);
        await page.click(page.commentBtn);
        let openBox = await page.driver.getCurrentUrl();
        expect(openBox).toContain("showComments");

        fs.writeFile(`${__dirname}/testResults.txt`, openBox, (e) => {
            if (e) console.log(e);
            else console.log('Successfully Opened Comments');
        });
    });

    test('Click close button', async () => {
        await page.getElement(page.closeBtn);
        await page.click(page.closeBtn);
        let closeBox = await page.driver.getCurrentUrl();
        expect(closeBox).not.toContain("showComments");

        fs.appendFile(`${__dirname}/testResults.txt`, closeBox, (e) => {
            if (e) console.log(e);
            else console.log('Successfully Closed Comments');
        });
    });

    test('Click Twitter and check destination', async () => {
        const originalWindow = await page.driver.getWindowHandle();
        await page.getElement(page.twitterBtn);
        await page.click(page.twitterBtn);
        await page.driver.wait(async () => (await page.driver.getAllWindowHandles()).length === 2, 10000);
        const windows = await page.driver.getAllWindowHandles();

        windows.forEach(async handle => {
            if (handle !== originalWindow) {
                await page.driver.switchTo().window(handle);
            }
            await page.driver.wait(until.titleContains('Log in to Twitter / X'), 10000);
            let twitterURLString = await page.driver.getCurrentUrl();
            await page.driver.switchTo().window(originalWindow);
            expect(twitterURLString).toContain("twitter.com/i/flow/login");
            fs.appendFile(`${__dirname}/testResults.txt`, twitterURLString, (e) => {
                if (e) console.log(e);
                else console.log(`Twitter Popup Accessed at ${twitterURLString}`);
            });
        });
    });

    test('Click Facebook and check destination', async () => {
        const originalWindow2 = await page.driver.getWindowHandle();
        await page.getElement(page.fbBtn);
        await page.click(page.fbBtn);
        await page.driver.wait(async () => (await page.driver.getAllWindowHandles()).length === 3, 10000);
        const windows2 = await page.driver.getAllWindowHandles();

        windows2.forEach(async handle => {
            if (handle !== originalWindow2) {
                await page.driver.switchTo().window(handle);
            }
            await page.driver.wait(until.titleContains('Facebook'), 10000);
            let fbURLString = await page.driver.getCurrentUrl();
            await page.driver.switchTo().window(originalWindow2);
            expect(fbURLString).toContain("facebook.com/login");
            fs.appendFile(`${__dirname}/testResults.txt`, fbURLString, (e) => {
                if (e) console.log(e);
                else console.log(`Facebook Popup Accessed at ${fbURLString}`);

            });
            
        });

    });

    test('Click author name and confirm correct destination page', async () => {
        // Need to store button text in a variable
        const authorLinkName = await page.getText(page.authorBtn);
        await page.getElement(page.authorBtn);
        await page.click(page.authorBtn);
        await page.getElement(page.authorName);
        const authorPageName = await page.getText(page.authorName);
        expect (authorLinkName).toContain(`${authorPageName}`);
        fs.appendFile(`${__dirname}/testResults.txt`, authorPageName, (e) => {
            if (e) console.log(e);
            else console.log(`${authorLinkName} is the same as ${authorPageName}`);
        });
        await page.driver.quit();
    });
        
    });
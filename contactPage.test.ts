import { Driver } from 'selenium-webdriver/chrome';
import {BasePage} from './basePage';
import {theVerge} from './contactPageObjectPage';
const page = new theVerge(); 
const fs = require('fs');

describe("Testing Contact Page", ()=> {
 
test('navigate to theverge and click contact page at the bottom of the page', async () => {
    await page.navigate();
    await page.getElement(page.contactPage);
    await page.click(page.contactPage);
    let contactPageUrl = await page.driver.getCurrentUrl();
    expect (contactPageUrl).toContain("https://www.theverge.com/contact-the-verge");
 });

test('click the please select button to view the dropdown menu', async () => {
    await page.getElement(page.pleaseSelectButton);
    await page.click(page.pleaseSelectButton);
    let pleaseSelectButtonUrl = await page.driver.getCurrentUrl();
    expect (pleaseSelectButtonUrl).toContain("DropdownMenu");
});

test('click the first and last name box to enter text', async () => {
    await page.getElement(page.firstLastNameBox);
    await page.click(page.firstLastNameBox);
    let firstLastNameBox = await page.driver.getCurrentUrl();
    expect (firstLastNameBox).toContain("JanetBrown");
});

test('click the email address box to enter text', async () => {
    await page.getElement(page.emailAddressBox);
    await page.click(page.emailAddressBox);
    let emailAddressBox = await page.driver.getCurrentUrl();
    expect (emailAddressBox).toContain("janetbrown@gmail.com");
});

test('click The Verge username box to enter text', async () => {
    await page.getElement(page.theVergeUsernameBox);
    await page.click(page.theVergeUsernameBox);
    let theVergeUsernameBox = await page.driver.getCurrentUrl();
    expect (theVergeUsernameBox).toContain("");
});

test('click the I am not a robot box to receive a green arrow', async () => {
    await page.getElement(page.notRobotBox);
    await page.click(page.notRobotBox);
    let notRobotBox = await page.driver.getCurrentUrl();
    expect (notRobotBox).toContain("aGreenArrow");
});

test('click the submit button and confirm it fails', async () => {
    await page.getElement(page.submitButton);
    await page.click(page.submitButton);
    let submitButton = await page.driver.getCurrentUrl();
    expect (submitButton).toContain("Oops! There was a problem:");
});

test('click the facebook button and comfirm it leads to the correct page', async () => {
    await page.getElement(page.facebookButton);
    await page.click(page.facebookButton);
    let facebookButton = await page.driver.getCurrentUrl();
    expect (facebookButton).toContain("https://www.facebook.com/verge");
});

test('click the twitter button and comfirm it leads to the correct page', async () => {
    await page.getElement(page.twitterButton);
    await page.click(page.twitterButton);
    let twitterButton = await page.driver.getCurrentUrl();
    expect (twitterButton).toContain("https://twitter.com/verge");
});

test('click the RSS button and comfirm it leads to the correct page', async () => {
    await page.getElement(page.RSSButton);
    await page.click(page.RSSButton);
    let RSSButton = await page.driver.getCurrentUrl();
    expect (RSSButton).toContain("https://www.theverge.com/rss/index.xml");
});

test('click the account button and comfirm it leads to the correct page', async () => {
    await page.getElement(page.accountButton);
    await page.click(page.accountButton);
    let accountButton = await page.driver.getCurrentUrl();
    expect (accountButton).toContain("https://auth.voxmedia.com/login?community_id=372&return_to=https://www.theverge.com/contact");
});

test('hover over the account page and click the log in button then comfirm it leads to the sign in page', async () => {
    await page.click(page.logInButton);
    let logInButton = await page.driver.getCurrentUrl();
    expect (logInButton).toContain("https://auth.voxmedia.com/login?community_id=372&return_to=https://www.theverge.com/contact");
});

test('hover over the account page and click the sign up button then comfirm it leads to the sign up page', async () => {
    await page.getElement(page.signUpButton);
    await page.click(page.signUpButton);
    let signUpButton = await page.driver.getCurrentUrl();
    expect (signUpButton).toContain("https://auth.voxmedia.com/signup?community_id=372&return_to=https://www.theverge.com/contact");
    await page.driver.quit();
});
test('hover over the account page and click the sign up button then comfirm it leads to the sign up page', async () => {
    await page.getElement(page.signUpButton);
    await page.click(page.signUpButton);
    let signUpButton = await page.driver.getCurrentUrl();
    expect (signUpButton).toContain("https://auth.voxmedia.com/signup?community_id=372&return_to=https://www.theverge.com/contact");
    await page.driver.quit();
});
}); 

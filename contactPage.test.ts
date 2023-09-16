import {Driver} from 'selenium-webdriver/chrome';
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
    expect (contactPageUrl).toBe("https://www.theverge.com/contact-the-verge");
    }); 

    test('click the please select button to view the dropdown menu', async () => {
    await page.getElement(page.pleaseSelectButton);
    await page.click(page.pleaseSelectButton);
    let pleaseSelectButtonUrl = await page.driver.getCurrentUrl();
    expect (pleaseSelectButtonUrl).toBe("https://www.theverge.com/contact-the-verge");
    });

    test('click the first and last name box', async () => {
    await page.getElement(page.firstLastNameBox);
    await page.click(page.firstLastNameBox);
    let firstLastNameBox = await page.driver.getCurrentUrl();
    expect (firstLastNameBox).toBe("https://www.theverge.com/contact-the-verge");
    });

    test('click the email address box', async () => {
    await page.getElement(page.emailAddressBox);
    await page.click(page.emailAddressBox);
    let emailAddressBox = await page.driver.getCurrentUrl();
    expect (emailAddressBox).toBe("https://www.theverge.com/contact-the-verge");
    });

    test('click The Verge username box', async () => {
    await page.getElement(page.theVergeUsernameBox);
    await page.click(page.theVergeUsernameBox);
    let theVergeUsernameBox = await page.driver.getCurrentUrl();
    expect (theVergeUsernameBox).toBe("https://www.theverge.com/contact-the-verge");
    });

    test('click the submit button and confirm it fails', async () => {
    await page.getElement(page.submitButton);
    await page.click(page.submitButton);
    let submitButton = await page.driver.getCurrentUrl();
    expect (submitButton).toBe("https://www.theverge.com/unison_contact/submit_contact_request");
    });

    test('testing the facebok website', async () => {
    await page.getElement(page.facebookButton);
    await page.click(page.facebookButton);
    await page.driver.navigate();
    await page.driver.get("https://www.theverge.com/contact-the-verge") 
    let facebookButton = await page.driver.getCurrentUrl();
    });

    test('testing the twitter website', async () => {
    await page.getElement(page.twitterButton);
    await page.click(page.twitterButton);
    await page.driver.navigate();
    await page.driver.get("https://www.theverge.com/contact-the-verge") 
    let twitterButton = await page.driver.getCurrentUrl();
    expect (twitterButton).toBe("https://twitter.com/verge");
    }); 
            
    test('testing the account page', async () => {
    await page.getElement(page.accountButton);
    await page.click(page.accountButton);
    await page.driver.get('https://www.theverge.com/contact-the-verge') 
    let accountButton = await page.driver.getCurrentUrl();
    });
            
    test('testing the sign in page', async () => {
    await page.getElement(page.logInButton);
    await page.click(page.logInButton);
    let logInButton = await page.driver.getCurrentUrl();
    });
            
    test('testing the sign up page', async () => {
    await page.getElement(page.signUpButton);
    await page.click(page.signUpButton);
    await page.driver.navigate();
    await page.driver.get("https://www.theverge.com/contact-the-verge") 
    let signUpButton = await page.driver.getCurrentUrl();
    });
        
    test('testing the search page', async () => {
    await page.getElement(page.magnifyingGlass)
    await page.click(page.magnifyingGlass);
    let magnifyingGlass = await page.driver.getCurrentUrl();
    });

    test('testing the search page', async () => {
    await page.getElement(page.searchBox)
    await page.click(page.searchBox);
    let searchBox = await page.driver.getCurrentUrl();
    }); 

    test('testing the search page', async () => {
    await page.getElement(page.searchButton)
    await page.click(page.searchButton);
    let searchButton = await page.driver.getCurrentUrl();
    expect (searchButton).toBe("https://www.theverge.com/search?q=");
    await page.driver.quit();
}); 
});
<<<<<<< HEAD:ContactPage.test.ts
=======
test('hover over the account page and click the sign up button then comfirm it leads to the sign up page', async () => {
    await page.getElement(page.signUpButton);
    await page.click(page.signUpButton);
    let signUpButton = await page.driver.getCurrentUrl();
    expect (signUpButton).toContain("https://auth.voxmedia.com/signup?community_id=372&return_to=https://www.theverge.com/contact");
    await page.driver.quit();
});
}); 
>>>>>>> 252615b0f9a8f6fbe6dbb4e9d7fe7c8700d98452:contactPage.test.ts

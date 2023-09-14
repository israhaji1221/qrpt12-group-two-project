import {BasePage} from './basePage';
import {theVerge} from './commentBoxPageObject';
const page = new theVerge(); 
const fs = require('fs')

//need to locate things to verify through expect on all tests
describe("Testing Comment Box", ()=> {
test('navigate to article page and click comment button', async () => {
    await page.navigate();
    await page.getElement(page.commentBtn);
    await page.click(page.commentBtn);

});
////issues with this test, I think it is with the locator?
test('Type in comment box', async () => {
    await page.getElement(page.textEdit);
    await page.click(page.textEdit);
    await page.setInput(page.textEdit, 'This is some text');
});
})

import {test,expect} from 'playwright/test';
import {LoginPage} from '../pages/LoginPage.js';
test('valid login functionality',async({page})=>{
    const login= new LoginPage(page);

    //test data
    const username='aayush234';
    const password='mypassword';
    
    
    await login.openWebsite();
    await login.openLoginPage();
    await login.Login(username,password); // fill username ,password and submit login
    await login.verifySuccessful(); // verify partial match
})
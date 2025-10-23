import {expect} from 'playwright/test';
export class LoginPage {
    constructor (page) {
        this.page=page;
        //Locator for login function
        this.loginInput=page.locator('#loginusername');
        this.loginPassword=page.locator('#loginpassword');
        this.loginSubmit=page.getByRole('button', { name: 'Log in' });
        this.welcome=page.locator('#nameofuser')
    }
    async openWebsite(){
        await this.page.goto('/')
    
    }
    async openLoginPage(){
        await this.page.click('#login2');
    }
    async Login(username,password){
        await this.loginInput.fill(username);
        await this.loginPassword.fill(password);
        await this.loginSubmit.click();
    }
    async verifySuccessful(){
        await expect (this.welcome).toContainText('Welcome');
    }

}
import {expect} from 'playwright/test'
export class CategoryPage{
    constructor (page){
        this.page=page;
        //LOcators
        this.CategorySelectLink=page.getByRole('link', { name : 'Laptops'});
        this.SelectItemLink=page.getByRole('link',{ name :'Sony vaio i7'});
        this.AddtoCartLink=page.getByRole('link',{name:'add to cart'});
        this.checkCart=page.getByRole('link',{name:'Cart'});
    }
    async openWebsite(){
        await this.page.goto('')
    }
    async CategorySelect(){
        await this.CategorySelectLink.click();
    }
    async SelectItem(){
        await this.SelectItemLink.click();
    }
    async AddtoCart(){
        await this.AddtoCartLink.click();
    }
    async verifyCart(){
        await expect (this.page.getByText('Sony vaio i7')).toBeVisible();
    }
}
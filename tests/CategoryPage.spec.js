import { test,expect } from "playwright/test";
import { CategoryPage} from "../pages/CategoryPage";
  test('select item via category and add to cart',async({page})=>{
    const categoryPage=new CategoryPage(page);

    await categoryPage. openWebsite();
    await categoryPage.CategorySelect();
    await categoryPage.SelectItem();
    await categoryPage.AddtoCart();
    await categoryPage.verifyCart();

  });
  
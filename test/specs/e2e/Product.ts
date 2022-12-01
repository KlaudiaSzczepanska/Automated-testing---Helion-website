import { alertMessage, deletedMessage, searchPhrase } from "../../config/data";
import { cartUrl, helionHomeUrl, searchUrl } from "../../config/pagesUrl"
import CartPage from "../../pages/components/CartPage";
import ProductPage from "../../pages/components/ProductPage";
import SearchbarPages from"../../pages/components/SearchbarPages";
import SearchResultPage from "../../pages/components/SearchResultPage";
describe("E2E -Product",async()=>{
    let productTitle:string="";
    let price:string="";
   before(()=>{
    browser.url(helionHomeUrl);
   })
   it("Should type search pharse and click search icon", async()=>{
    await SearchbarPages.typeSearchPhrase(searchPhrase);
    await SearchbarPages.clickOnSearchIcon();
    await expect (browser).toHaveUrl(searchUrl);
   })

   it("Sholud click on first book", async()=>{
    await SearchResultPage.clickOnFirsBookItem();
    await ProductPage.productTitleIsVisible();
    await ProductPage.addToCartBtnIsVisible();
    productTitle= await ProductPage.getProductTitleValue();
    price= await ProductPage.getProductPrice();
   })

   it("Should click on add to cart button", async()=>{
    await ProductPage.clickAddToCartBtn();
    await expect(browser).toHaveUrlContaining(cartUrl);
    await expect (await CartPage.getSuccesAlertValue()).toContain(productTitle);
    await expect (await CartPage.getTotalPriceValue()).toContain(price);
   })
   it("Should delete product from cart", async()=>{
    await CartPage.clickOnCheckbox();
    await CartPage.clickOnDeleteBtn();
    await expect(await browser.getAlertText()).toContain(alertMessage);
    await CartPage.acceptDeleteAlert();
    await expect(await CartPage.getAlertMessage()).toContain(deletedMessage);


   })
})
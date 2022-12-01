class ProductPage{
    get productTitle(){
        return $("section#big-movie>div.movie-description>div.container>h1");
    }
    get addToCartBtn(){
        return $("a#addToBasket_vwdtnp_w");
    }
    get productPrice (){
        return $("ins#cena_w");
    }
    async getProductPrice():Promise<string>{
        const price:WebdriverIO.Element= await this.productPrice;
        await price.waitForDisplayed();
        return await price.getText();

    }
    async getProductTitleValue():Promise<string>{
        const title:WebdriverIO.Element= await this.productTitle;
        title.waitForDisplayed();
        return await title.getText();
    }
    async productTitleIsVisible(){
        const title:WebdriverIO.Element= await this.productTitle;
        await title.waitForDisplayed();
    }

    async addToCartBtnIsVisible(){
        const btn:WebdriverIO.Element = await this.addToCartBtn;
        await btn.waitForDisplayed();
    }
    async clickAddToCartBtn (){
        const btn:WebdriverIO.Element= await this.addToCartBtn;
        await btn.waitForDisplayed();
        await btn.scrollIntoView();
        await btn.click();
    }
}

export default new ProductPage();
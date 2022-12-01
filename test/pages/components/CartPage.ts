class CartPage{
    get successAlert(){
        return $("div.successbox >p");
    }
    get totalPrice (){
        return $("h3#cart-edit-summary");
    }
    get checkbox(){
        return $("th.checkbox");
    }

    get deleteBtn(){
        return $("div#usun a");
    }
    get deletedAlerMessage(){
        return $("div.infobox >p ");
    }
    async getAlertMessage():Promise<string>{
        const alert:WebdriverIO.Element= await this.deletedAlerMessage;
        await alert.waitForDisplayed();
        return await alert.getText();
    }
    async acceptDeleteAlert(){
        await browser.acceptAlert();
    }
    async clickOnDeleteBtn(){
        const deleteBtn:WebdriverIO.Element= await this.deleteBtn;
        await deleteBtn.waitForDisplayed ();
        await deleteBtn.scrollIntoView();
        await deleteBtn.click();

    }
    async clickOnCheckbox(){
        const checkbox:WebdriverIO.Element=await this.checkbox
        await checkbox.waitForDisplayed();
        await checkbox.scrollIntoView();
        await checkbox.click();

    }

    async getTotalPriceValue():Promise<string>{
        const price:WebdriverIO.Element= await this.totalPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }
    async getSuccesAlertValue():Promise<string>{
        const alert:WebdriverIO.Element= await this.successAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }
}

export default new CartPage();
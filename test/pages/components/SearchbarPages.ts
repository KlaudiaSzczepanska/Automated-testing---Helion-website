class SearchBarPage{
    get searchInput(){
        return $("#inputSearch");
    }
    get searchIcon(){
        return $("//button[contains(text(),'Szukaj')]");
    }
    get suggestPopup(){
        return $("form#szukanie div.suggest-list");
    }
    get seeAllBooksButton(){
        return $("//a[contains(text(), 'Zobacz wszystkie')]");
    }
    get notFoundAlert(){
        return $("div.not-found");
    }
    async getNotFoundAlertText():Promise<string>{
        const alert:WebdriverIO.Element= await this.notFoundAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }
    async clickOnSeeAllBooksBtn (){
        const button:WebdriverIO.Element= await this.seeAllBooksButton;
        await button.waitForDisplayed();
        await button.scrollIntoView();
        await button.click();
    }

    async suggestPopupIsVisible(){
        const popup:WebdriverIO.Element= await this.suggestPopup;
        await popup.waitForDisplayed();
    }

    async typeSearchPhrase(value:string){
        const input:WebdriverIO.Element= await this.searchInput;
        await input.waitForDisplayed;
        await input.setValue(value);
        
    }

    async searchBarIsVisible(){
        const input:WebdriverIO.Element= await this.searchInput;
        await input.waitForDisplayed();
    }
    async clickOnSearchIcon(){
        const icon:WebdriverIO.Element= await this.searchIcon;
        await icon.waitForDisplayed;
        await icon.click();
    }
    async clearSearchBar(){
        const input:WebdriverIO.Element= await this.searchInput;
        await input.waitForDisplayed();
        await input.clearValue();
    }
    async getInputValue():Promise<string>{
        const input:WebdriverIO.Element=await this.searchInput;
        await input.waitForDisplayed();
        return input.getValue();
    }
}

export default new SearchBarPage();
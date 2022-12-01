class SearchResultPage{
    get pageTitle(){
        return $("h1#pageTitle");
    }

    get booksItem(){
       return $$("ul.list>li");
    }
    get firstBookItem(){
        return $("ul.list>li:nth-child(1)>a");
    }
    async clickOnFirsBookItem(){
        const item:WebdriverIO.Element= await this.firstBookItem;
        await item.waitForDisplayed;
        await item.click();
    }
    async getNumberOfBooks(): Promise<number>{
        const books:WebdriverIO.ElementArray = await this.booksItem;
        return await books.length;
    }

    async getPageTitle():Promise<string> {
        const title:WebdriverIO.Element = await this.pageTitle;
        await title.waitForDisplayed();
        return await title.getText();    
    }
}

export default new SearchResultPage();
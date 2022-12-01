import GlobalPage from "../../pages/components/GlobalPage";
import SearchResultPage from "../../pages/components/SearchResultPage";
import SearchBarPages from "../../pages/components/SearchbarPages";
import {helionHomeUrl, notFoundUrl, searchPageUrl} from "../../config/pagesUrl";
import { incorrectSearchPhrase, notFoundMessage, searchPhrase, searchResultTitle } from "../../config/data";
import SearchbarPages from "../../pages/components/SearchbarPages";
describe("E2E - SearchBar", async()=>{
    it("Should open helion home page and verify url and visible searchbar", async()=>{
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await SearchBarPages.searchBarIsVisible();
    })
    it ("Should click on search icon and verify url", async()=>{
        await SearchBarPages.clickOnSearchIcon();
        await expect(browser).toHaveUrl(helionHomeUrl);
    })
    it("Should type search value and verify visible popup", async()=>{
        await SearchBarPages.typeSearchPhrase(searchPhrase);
        await SearchBarPages.suggestPopupIsVisible();
    })
    it("Should click on see all books button", async()=>{
        await SearchBarPages.clickOnSeeAllBooksBtn();
    })
    it("Should verify visible correctly title and number of books",async()=>{
        await GlobalPage.openPage(searchPageUrl,searchPageUrl);
        const title:string= await SearchResultPage.getPageTitle();
        const numberOfBooks:number= await SearchResultPage.getNumberOfBooks();
        await expect(title).toContain(searchResultTitle);
        await expect(numberOfBooks).toEqual(20);
    })
    it("Should clear input value", async()=>{
        await SearchbarPages.clearSearchBar();
        await expect(await SearchBarPages.getInputValue()).toContain("");
    })
    it("Should type incorret book name and verify alert", async()=>{
        await SearchBarPages.typeSearchPhrase(incorrectSearchPhrase);
        await SearchBarPages.clickOnSearchIcon();
        await expect(await SearchBarPages.getNotFoundAlertText()).toContain(notFoundMessage);
    })
    it("Should clear input value and clik on search icon", async()=>{
        await SearchBarPages.clearSearchBar();
        await SearchBarPages.clickOnSearchIcon();
        await expect(browser).toHaveUrl(notFoundUrl);
        await expect(await SearchBarPages.getInputValue()).toContain(incorrectSearchPhrase);
    })

})
exports.HomePage = class HomePage{

    constructor(page){
        
        this.page = page;
        this.sideNavigationProfile = this.page.locator("//div[@data-test-id='header-menu']");
        this.logoutButton = this.page.locator("//li[@data-test-id='header-logout']")

    }

    async logout(){
        await this.sideNavigationProfile.click();
        await this.logoutButton.click();
    }

}
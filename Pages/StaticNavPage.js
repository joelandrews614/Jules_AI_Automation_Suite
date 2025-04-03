exports.StaticNavPage = class StaticNavPage{

    constructor(page){
        
        this.page = page;
        this.sideNavigationProfile = this.page.locator("//div[@data-test-id='header-menu']");
     
        this.sideBarPageTitle = this.page.locator("(//div[@class='headroom-wrapper']/div/div/div)[2]")
        
        this.suppliersBase = this.page.locator("(//div[@permission='SUPPLIERS,CUSTOMERS,CONTACTS'])[1]");
        this.suppliersAndSites = this.page.locator("//a[@href='/supplier-board']")

        this.purchasesBase = this.page.locator("//div[@permission='OPERATION_TRADING_BUY,WM_SPOT,WM_RECURRING,OFFERS,SOURCING_HUB,PURCHASE_GOALS']");
        this.purchases_trading = this.page.locator("//a[@href='/purchases']");

        this.salesBase = this.page.locator("(//div[@permission='OPERATION_TRADING_SELL'])[1]");
        this.sales = this.page.locator("//a[@href='/sales']");

        this.inventBase = this.page.locator("(//div[@permission='WAREHOUSE_INBOUNDS,WAREHOUSE_INVENTORY,WAREHOUSE_OUTBOUNDS'])[1]");
        this.inventInboundLoads = this.page.locator("//a[@href='/warehouse_inbounds']");

        this.riskMangeBase = this.page.locator("//div[@permission='HEDGING_CONTRACTS,OPEN_POSITION_REPORT']");
        this.riskMangeHedgeCont = this.page.locator("//a[@href='/hedging-contracts']");

        this.logisticsBase = this.page.locator("//div[@permission='CONTAINERS_FOLLOW_UP,CONTAINERS_FOLLOW_UP,ALLOCATIONS,SHIPMENTS_FOLLOW_UP,CONTAINERS_FOLLOW_UP,SHIPMENT_TRACKER']");
        this.logisticsPlanBook = this.page.locator("//a[@href='/planning-and-booking']");

        this.logoutButton = this.page.locator("//li[@data-test-id='header-logout']")
    }

    async logout(){
        await this.sideNavigationProfile.click();
        await this.logoutButton.click();
    }

    async clickSuppliersAndSites(){
        await this.suppliersBase.hover();
        await this.suppliersAndSites.click();
    }

    async clickPurchases_Trading(){
        await this.purchasesBase.hover();
        await this.purchases_trading.click();
    }

    async clickSales(){

        await this.salesBase.hover();
        await this.sales.click();
    }

    async clickInventInboundLoads(){
     
        await this.inventBase.hover();
        await this.inventInboundLoads.click();
        
    }

    async clickRiskMangeHedgeCont(){
        await this.riskMangeBase.hover();
        await this.riskMangeHedgeCont.click();
    }

    async clickLogisticsPlanBook(){
        await this.logisticsBase.hover();
        await this.logisticsPlanBook.click();
    }

}
import {test, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage";
import { StaticNavPage } from "../Pages/StaticNavPage";

let loginPage, staticNavPage;
let email = "qa@julesai.com", password = "QaJULES2023!";

test.beforeEach(async ({page}) => {

    loginPage = new LoginPage(page);
    staticNavPage = new StaticNavPage(page);

    await page.evaluate(() => {
      window.resizeTo(window.screen.width, window.screen.height);
    });

    await page.goto("https://demo.haroldwaste.com/");

    await loginPage.login(email, password);

});

test("TC_01 - Navigate to Suppliers & Sites", async () => {

    await staticNavPage.clickSuppliersAndSites();

    await expect(staticNavPage.sideBarPageTitle).toHaveText("Suppliers & Sites");

});

test("TC_02 - Navigate to Purchases(Trading)", async () => {

    await staticNavPage.clickPurchases_Trading();

    await expect(staticNavPage.sideBarPageTitle).toHaveText("Purchase & Opportunity list");

});

test("TC_03 - Navigate to Sales", async () => {

    await staticNavPage.clickSales();

    await expect(staticNavPage.sideBarPageTitle).toHaveText("Sale & Opportunity list");

})

test("TC_04 - Navigate to Inventory - Inbound loads", async () => {

    await staticNavPage.clickInventInboundLoads();

    await expect(staticNavPage.sideBarPageTitle).toHaveText("Inbound loads");

})

test("TC_05 - Navigate to Risk Management - Hedge Contracts", async () => {

    await staticNavPage.clickRiskMangeHedgeCont();

    await expect(staticNavPage.sideBarPageTitle).toHaveText("Hedging contracts");

})

test("TC_06 - Navigate to Logistics - Planning and Booking", async () => {

    await staticNavPage.clickLogisticsPlanBook();

    await expect(staticNavPage.sideBarPageTitle).toHaveText("Planning/Booking");

})
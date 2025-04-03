// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import fs from 'fs';
import csv from 'csv-parser';

let loginPage, homePage;
let email = "qa@julesai.com", password = "QaJULES2023!";

test.beforeEach(async ({page}) => {

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await page.evaluate(() => {
      window.resizeTo(window.screen.width, window.screen.height);
    });

    await page.goto("https://demo.haroldwaste.com/");

})

test("TC_01 - Validate Successful Login Process", async ({page}) => {

  await loginPage.login(email, password);

  await expect(page).toHaveURL("https://demo.haroldwaste.com/purchases");

  await homePage.logout();

  await expect(page).toHaveURL("https://demo.haroldwaste.com/authentication");

})

test("TC_02 - Validate the Negative Login Scenarios", async () => {

  const testData = [];

  await new Promise((resolve, reject) => {
    fs.createReadStream('./test-data/LoginTestData.csv')
    .pipe(csv())
    .on('data', (row) => testData.push(row))
    .on('end', resolve)
    .on('error', reject);
  });

  for(const testdata of testData){
    await loginPage.login(testdata.email, testdata.password);  

    const key = `${testdata.email}:${testdata.password}`;

    switch (key) {
      case ":":  // TC_2.1 - Empty username and password
        await expect(loginPage.emailRequiredError).toBeVisible();
        await expect(loginPage.passwordRequiredError).toBeVisible();
        break;
  
      case "Test:": // TC_2.2 - Invalid username and empty password
        await expect(loginPage.emailNotValidError).toBeVisible();
        await expect(loginPage.passwordRequiredError).toBeVisible();
        break;
  
      case ":Test12345678": // TC_2.3 - Empty email and invalid password
        await expect(loginPage.emailRequiredError).toBeVisible();
        break;
  
      case "qa@julesai.com:Test12345678": // TC_2.4 - Valid email and invalid password
        await expect(loginPage.invalidErrorMessage).toHaveText("Your email and/or password are incorrects");
        break;
  
      case "test614@gmail.com:QaJULES2023!": // TC_2.5 - Valid email and invalid password
        await expect(loginPage.invalidErrorMessage).toHaveText("Your email and/or password are incorrects");
        break;

      case "test614@gmail.com:Test12345678": // TC_2.6 - Invalid email and invalid password
        await expect(loginPage.invalidErrorMessage).toHaveText("Your email and/or password are incorrects");
        break;

      case "test614@gmail.com:Test": // TC_2.7 - Valid email and short password
        await expect(loginPage.passwordShortError).toBeVisible();
        break;

      default:
        console.log(`Unknown test case: ${key}`);
    }

  }

})
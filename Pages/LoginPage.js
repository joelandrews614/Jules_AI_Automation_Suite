exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page;
        
        this.emailInput = this.page.locator("[name='email']");
        this.emailRequiredError = this.page.locator("(//div[@class='sc-ksZaOG kDhRPt']/div/div)[3]");
        this.emailNotValidError = this.page.getByText("Email not valid");

        this.passwordInput = this.page.locator("[name='password']")
        this.passwordRequiredError = this.page.locator("(//div[@class='sc-ksZaOG kDhRPt']/div/div)[6]")
        this.passwordShortError = this.page.getByText("Password too short"); 

        this.loginButton = this.page.locator("//button[@type='submit']");
        
        this.invalidErrorMessage = this.page.locator("(//div[@data-test-id='toaster-message'])[1]");
    }

    async login(email, password){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}
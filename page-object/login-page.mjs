import elementHelper from "../helper/element-helper.mjs";
import loginKey from "../key-definitions/login-keys.mjs";
import homeKey from "../key-definitions/home-keys.mjs";
import { assert } from "chai";

class LoginPage{
    async openUrl(){
        await browser.url("/");
    };

    async verifyLoginPage(){
        await elementHelper.waitForExist(loginKey.loginForm);
    };

    async inputUsername(username){
        await elementHelper.setValue(loginKey.inputUsername, username);
    };

    async verifyUsernameInputed(username){
        await elementHelper.validateValueEqual(loginKey.inputUsername, username);
    };

    async inputPassword(password){
        await elementHelper.setValue(loginKey.inputPassword, password);
    };

    async verifyPasswordInputed(password){
        await elementHelper.validateValueEqual(loginKey.inputPassword, password);
    };

    async selectLocation(location){
        let key;
        switch (location) {
            case "Inpatient Ward":
                key = loginKey.inpatientWard;
                break;
            case "Isolation Ward":
                key = loginKey.isolationWard;
                break;
            case "Laboratory":
                key = loginKey.laboratory;
                break;
            case "Outpatient Clinic":
                key = loginKey.outpatientClinic;
                break;
            case "Pharmacy":
                key = loginKey.pharmacy;
                break;
            case "Registration Desk":
                key = loginKey.registrationDesk;
                break;
            default:
                assert.fail("Location not valid");
        }
        await elementHelper.click(key)
    };

    async verifyLocationSelected(location){
        let key;
        switch (location) {
            case "Inpatient Ward":
                key = loginKey.inpatientWard;
                break;
            case "Isolation Ward":
                key = loginKey.isolationWard;
                break;
            case "Laboratory":
                key = loginKey.laboratory;
                break;
            case "Outpatient Clinic":
                key = loginKey.outpatientClinic;
                break;
            case "Pharmacy":
                key = loginKey.pharmacy;
                break;
            case "Registration Desk":
                key = loginKey.registrationDesk;
                break;
            default:
                assert.fail("Location not valid");
        }
        await elementHelper.validateValueAtrribut(key, "class", "selected")
    };

    async clickLoginButton(){
        await elementHelper.click(loginKey.loginButton);
    };

    async verifyHomePage(){
        await elementHelper.waitForExist(homeKey.homeContent);
    };

    async clickLogoutButton(){
        await elementHelper.click(homeKey.logoutButton);
    };

    async clickLocationHome(){
        await elementHelper.click(homeKey.selectLocation);
    };

    async verifySectionLocationHome(){
        await elementHelper.waitForExist(homeKey.sectionLocation);
    };

    async chooseLocationHome(){
        await elementHelper.pause(2);
        await elementHelper.click(homeKey.pharmacy);
        await elementHelper.pause(5);
    };

    async verifyLocationHomeChoosed(){
        await elementHelper.validateTextEqual(homeKey.selectLocation, "Pharmacy");
    };
}
const loginPage = new LoginPage();
export default loginPage;
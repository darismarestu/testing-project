import elementHelper from "../helper/element-helper.mjs";
import loginKey from "../key-definitions/login-keys.mjs";
import homeKey from "../key-definitions/home-keys.mjs";
import { assert } from "chai";

class LoginPage{
    async openUrl(){
        await browser.url("/");
    };

    async verifyLoginPage(){
        await elementHelper.waitForExist(loginKey.loginContainer);
    };

    async inputUsername(username){
        await elementHelper.setValue(loginKey.inputUserName, username);
    };

    async verifyUsernameInputed(username){
        await elementHelper.validateValueEqual(loginKey.inputUserName, username);
    };

    async inputPassword(password){
        await elementHelper.setValue(loginKey.inputPassword, password);
    };

    async verifyPasswordInputed(password){
        await elementHelper.validateValueEqual(loginKey.inputPassword, password);
    };

    async clickLoginButton(){
        await elementHelper.click(loginKey.btnLogin);
    };

    async verifyHomePage(){
        await elementHelper.waitForExist(homeKey.homeContainer);
        await elementHelper.pause(2);
    };

    async clickLogoutButton(){
        await elementHelper.click(homeKey.burgerMenu);
        await elementHelper.pause(2);
        await elementHelper.click(homeKey.btnLogout);
    };

}
const loginPage = new LoginPage();
export default loginPage;
import elementHelper from "../helper/element-helper.mjs";
import homeKey from "../key-definitions/home-keys.mjs";
import cartKey from "../key-definitions/cart-keys.mjs";
import checkoutKey from "../key-definitions/checkout-keys.mjs";
import { assert } from "chai";

class BuyProductPage{
    async clickAddToCartBackpack() {
        await elementHelper.click(homeKey.addToCartBackpack);
    };

    async verifySuccessAddBackpack() {
        await elementHelper.waitForExist(homeKey.removeBackpack);
    };

    async clickIconCart() {
        await elementHelper.click(homeKey.iconCart);
    };

    async verifyScreenCartList() {
        await elementHelper.waitForExist(cartKey.cartContentsContainer);
    };

    async clickBtnCheckout() {
        await elementHelper.click(cartKey.btnCheckout);
    };

    async verifyScreenCheckoutInfo() {
        await elementHelper.waitForExist(checkoutKey.checkoutInfoContainer);
    };

    async inputFirstName(firstName) {
        await elementHelper.setValue(checkoutKey.inputFirstName, firstName);
    };

    async verifySuccessInputFirstName(firstName) {
        await elementHelper.validateValueEqual(checkoutKey.inputFirstName, firstName);
    };

    async inputLastName(lastName) {
        await elementHelper.setValue(checkoutKey.inputLastName, lastName);
    };

    async verifySuccessInputLastName(lastName) {
        await elementHelper.validateValueEqual(checkoutKey.inputLastName, lastName);
    };

    async inputPostalCode(postalCode) {
        await elementHelper.setValue(checkoutKey.inputPostalCode, postalCode);
    };

    async verifySuccessInputPostalCode(postalCode) {
        await elementHelper.validateValueEqual(checkoutKey.inputPostalCode, postalCode);
    };

    async clickBtnContinue() {
        await elementHelper.click(checkoutKey.btnContinue);
    };

    async verifyScreenCheckoutSummary() {
        await elementHelper.waitForExist(checkoutKey.checkoutSummaryContainer);
    };

    async clickBtnFinish() {
        await elementHelper.click(checkoutKey.btnFinish);
    };

    async verifyScreenCheckoutComplete() {
        await elementHelper.waitForExist(checkoutKey.checkoutCompleteContainer);
    };

    async clickBtnBackToHome() {
        await elementHelper.click(checkoutKey.btnBackToHome);
    };

}
const buyProductPage = new BuyProductPage();
export default buyProductPage;
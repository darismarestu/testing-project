import { When, Then } from "@wdio/cucumber-framework";
import buyProductPage from "../page-object/buy-product-page.mjs";

When(/^Click add to cart backpack$/, async () => {
	await buyProductPage.clickAddToCartBackpack();
});

Then(/^Berhasil memasukan backpack ke keranjang$/, async () => {
	await buyProductPage.verifySuccessAddBackpack();
});

When(/^Click icon keranjang$/, async () => {
	await buyProductPage.clickIconCart();
});

Then(/^Menampilkan halaman cart list$/, async () => {
	await buyProductPage.verifyScreenCartList();
});

When(/^Click button checkout$/, async () => {
	await buyProductPage.clickBtnCheckout();
});

Then(/^Berhasil menampilkan halaman checkout info$/, async () => {
	await buyProductPage.verifyScreenCheckoutInfo()
});

When(/^Memasukan first name (.*)$/, async (firstName) => {
	await buyProductPage.inputFirstName(firstName);
});

Then(/^Berhasil memasukan first name (.*)$/, async (firstName) => {
	await buyProductPage.verifySuccessInputFirstName(firstName);
});

When(/^Memasukan last name (.*)$/, async (lastName) => {
	await buyProductPage.inputLastName(lastName);
});

Then(/^Berhasil memasukan last name (.*)$/, async (lastName) => {
	await buyProductPage.verifySuccessInputLastName(lastName);
});

When(/^Memasukan postal code (.*)$/, async (postalCode) => {
	await buyProductPage.inputPostalCode(postalCode);
});

Then(/^Berhasil memasukan postal code (.*)$/, async (postalCode) => {
	await buyProductPage.verifySuccessInputPostalCode(postalCode);
});

When(/^Click button continue$/, async () => {
	await buyProductPage.clickBtnContinue();
});

Then(/^Berhasil menampilkan halaman checkout summary$/, async () => {
	await buyProductPage.verifyScreenCheckoutSummary();
});

When(/^Click button finish$/, async () => {
	await buyProductPage.clickBtnFinish();
});

Then(/^Berhasil menampilkan halaman checkout complete$/, async () => {
	await buyProductPage.verifyScreenCheckoutComplete()
});

When(/^Click button back to home$/, async () => {
	await buyProductPage.clickBtnBackToHome();
});

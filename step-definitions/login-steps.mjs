import { When, Then } from "@wdio/cucumber-framework";
import loginPage from "../page-object/login-page.mjs";

When(/^Membuka halaman login$/, async () => {
	await loginPage.openUrl();
});

Then(/^Berhasil Menampilkan laman Login$/, async () => {
	await loginPage.verifyLoginPage();
});

When(/^Memasukan username (.*)$/, async (username) => {
	await loginPage.inputUsername(username);
});

Then(/^Berhasil memasukan username (.*)$/, async (username) => {
	await loginPage.verifyUsernameInputed(username);
});

When(/^Memasukan password (.*)$/, async (password) => {
	await loginPage.inputPassword(password);
});

Then(/^Berhasil memasukan password (.*)$/, async (password) => {
	await loginPage.verifyPasswordInputed(password);
});

When(/^Memilih Location for this session (.*)$/, async (location) => {
	await loginPage.selectLocation(location);
});

Then(/^Berhasil Memilih Location for this session (.*)$/, async (location) => {
	await loginPage.verifyLocationSelected(location);
});

When(/^Meng-klik tombol Login$/, async () => {
	await loginPage.clickLoginButton();
});

Then(/^Menampilkan homepage$/, async () => {
	await loginPage.verifyHomePage();
});

When(/^Meng-klik tombol Logout$/, async () => {
	await loginPage.clickLogoutButton();
});

When(/^Meng-klik select location$/, async () => {
	await loginPage.clickLocationHome();
});

Then(/^Menampilkan section location$/, async () => {
	await loginPage.verifySectionLocationHome();
});

When(/^Memilih location Pharmacy$/, async () => {
	await loginPage.chooseLocationHome();
});

Then(/^Berhasil memilih location Pharmacy$/, async () => {
	await loginPage.verifyLocationHomeChoosed();
});



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

When(/^Meng-klik tombol Login$/, async () => {
	await loginPage.clickLoginButton();
});

Then(/^Menampilkan homepage$/, async () => {
	await loginPage.verifyHomePage();
});

When(/^Meng-klik tombol Logout$/, async () => {
	await loginPage.clickLogoutButton();
});


import { When, Then } from "@wdio/cucumber-framework";
import activeVisitsPage from "../page-object/active-visits-page.mjs";

When(/^Meng-klik menu Active Visits$/, async () => {
	await activeVisitsPage.clickActiveVisitsMenu();
});

Then(/^Menampilkan halaman Active Visits$/, async () => {
	await activeVisitsPage.verifyActiveVisitsPage();
});

When(/^Search active visits (.*)$/, async (name) => {
	await activeVisitsPage.searchActiveVisits(name);
});

Then(/^Menampilkan hasil pencarian active visits (.*)$/, async (name) => {
	await activeVisitsPage.verifyActiveVisitsSearched(name);
});

When(/^View active visits (.*)$/, async (name) => {
	await activeVisitsPage.viewActiveVisits(name);
});




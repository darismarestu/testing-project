import { When, Then } from "@wdio/cucumber-framework";
import findPatientRecordPage from "../page-object/find-patient-record-page.mjs";

When(/^Meng-klik Find Patient Record menu$/, async () => {
	await findPatientRecordPage.clickFindPatientMenu();
});

Then(/^Menampilkan halaman Find Patient Record$/, async () => {
	await findPatientRecordPage.verifyFindPatientPage();
});

When(/^Search patient (.*)$/, async (name) => {
	await findPatientRecordPage.searchPatient(name);
});

Then(/^Menampilkan hasil pencarian patient (.*)$/, async (name) => {
	await findPatientRecordPage.verifyPatientSearched(name);
});

When(/^View patient (.*)$/, async (name) => {
	await findPatientRecordPage.viewPatientDetail(name);
});

Then(/^Menampilkan detail patient (.*)$/, async (name) => {
	await findPatientRecordPage.verifyPatientDetail(name);
});

When(/^Meng-klik show contact info$/, async () => {
	await findPatientRecordPage.showContactInfo();
});

Then(/^Show contact info expanded$/, async () => {
	await findPatientRecordPage.contactInfoExpanded();
});

Then(/^Menampilkan hasil pencarian No matching records found$/, async () => {
	await findPatientRecordPage.noMatchingRecord();
});

When(/^Meng-klik tombol next$/, async () => {
	await findPatientRecordPage.clickButtonNext();
});

When(/^Meng-klik tombol prev$/, async () => {
	await findPatientRecordPage.clickButtonPrev();
});





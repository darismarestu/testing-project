import { When, Then } from "@wdio/cucumber-framework";
import registerAPatientPage from "../page-object/register-a-patient-page.mjs";

When(/^Meng-klik Register A Patient menu$/, async () => {
	await registerAPatientPage.clickRegisterAPatientMenu();
});

Then(/^Menampilkan halaman Register A Patient$/, async () => {
	await registerAPatientPage.verifyRegisterAPatientPage();
});


When(/^Menginput field given name (.*)$/, async (name) => {
	await registerAPatientPage.inputGivenName(name);
});

Then(/^Berhasil menginput field given name (.*)$/, async (name) => {
	await registerAPatientPage.verifyGivenNameInputed(name);
});

When(/^Menginput field middle name (.*)$/, async (name) => {
	await registerAPatientPage.inputMiddleName(name);
});

Then(/^Berhasil menginput field middle name (.*)$/, async (name) => {
	await registerAPatientPage.verifyMiddleNameInputed(name);
});

When(/^Menginput field family name (.*)$/, async (name) => {
	await registerAPatientPage.inputFamilyName(name);
});

Then(/^Berhasil menginput field family name (.*)$/, async (name) => {
	await registerAPatientPage.verifyFamilyNameInputed(name);
});

When(/^Mengklik next button$/, async () => {
	await registerAPatientPage.clickNextButton();
});

Then(/^Menampilkan section gender$/, async () => {
	await registerAPatientPage.verifyGenderSection();
});

When(/^Memilih field gender (.*)$/, async (gender) => {
	await registerAPatientPage.chooiseGender(gender);
});

Then(/^Berhasil memilih field gender (.*)$/, async (gender) => {
	await registerAPatientPage.verifyGenderChooised(gender)
});

Then(/^Menampilkan section birthdate$/, async () => {
	await registerAPatientPage.verifyBirthdateSection();
});

When(/^Menginput field day birthdate (.*)$/, async (date) => {
	await registerAPatientPage.inputDayBirthdate(date);
});

Then(/^Berhasil menginput field day birthdate (.*)$/, async (date) => {
	await registerAPatientPage.verifyDayBirthdateInputed(date);
});

When(/^Memilih field month birthdate (.*)$/, async (month) => {
	await registerAPatientPage.inputMonthBirthdate(month);
});

Then(/^Berhasil memilih field month birthdate (.*)$/, async (month) => {
	await registerAPatientPage.verifyMonthBirthdateInputed(month);
});

When(/^Menginput field year birthdate (.*)$/, async (year) => {
	await registerAPatientPage.inputYearBirthdate(year);
});

Then(/^Berhasil menginput field year birthdate (.*)$/, async (year) => {
	await registerAPatientPage.verifyYearBirthdateInputed(year);
});

Then(/^Menampilkan section address$/, async () => {
	await registerAPatientPage.verifyAddressSection();
});

When(/^Menginput field address (.*)$/, async (address) => {
	await registerAPatientPage.inputAddress(address);
});

Then(/^Berhasil menginput field address (.*)$/, async (address) => {
	await registerAPatientPage.verifyAddressInputed(address);
});

When(/^Menginput field address2 (.*)$/, async (address) => {
	await registerAPatientPage.inputAddress2(address);
});

Then(/^Berhasil menginput field address2 (.*)$/, async (address) => {
	await registerAPatientPage.verifyAddress2Inputed(address);
});

When(/^Menginput field city (.*)$/, async (city) => {
	await registerAPatientPage.inputCity(city);
});

Then(/^Berhasil menginput field city (.*)$/, async (city) => {
	await registerAPatientPage.verifyCityInputed(city);
});

When(/^Menginput field state (.*)$/, async (state) => {
	await registerAPatientPage.inputState(state);
});

Then(/^Berhasil menginput field state (.*)$/, async (state) => {
	await registerAPatientPage.verifyStateInputed(state);
});

When(/^Menginput field country (.*)$/, async (country) => {
	await registerAPatientPage.inputCountry(country);
});

Then(/^Berhasil menginput field country (.*)$/, async (country) => {
	await registerAPatientPage.verifyCountryInputed(country);
});

When(/^Menginput field postal code (.*)$/, async (postalcode) => {
	await registerAPatientPage.inputPostalCode(postalcode);
});

Then(/^Berhasil menginput field postal code (.*)$/, async (postalcode) => {
	await registerAPatientPage.verifyPostalCodeInputed(postalcode);
});

Then(/^Menampilkan section phone number$/, async () => {
	await registerAPatientPage.verifySectionPhoneNumber();
});

When(/^Menginput field phone number (.*)$/, async (phoneNumber) => {
	await registerAPatientPage.inputPhoneNumber(phoneNumber);
});

Then(/^Berhasil menginput field phone number (.*)$/, async (phoneNumber) => {
	await registerAPatientPage.verifyPhoneNumberInputed(phoneNumber);
});

Then(/^Menampilkan section relatives$/, async () => {
	await registerAPatientPage.verifySectionRelatives();
});

When(/^Memilih field relationship type (.*)$/, async (type) => {
	await registerAPatientPage.chooseRelationshipType(type);
});

Then(/^Berhasil memilih field relationship type (.*)$/, async (type) => {
	await registerAPatientPage.verifyRelationTypeChooised(type);
});

When(/^Menginput field persone name (.*)$/, async (name) => {
	await registerAPatientPage.inputPersoneName(name);
});

Then(/^Berhasil menginput persone name (.*)$/, async (name) => {
	await registerAPatientPage.verifyPersoneNameInputed(name);
});

Then(/^Menampilkan section confirm$/, async () => {
	await registerAPatientPage.verifySectionConfirm();
});

When(/^Mengklik confirm button$/, async () => {
	await registerAPatientPage.clickConfirmButton();
});

Then(/^Menampilkan registered patient (.*)$/, async (name) => {
	await registerAPatientPage.verifyPatientRegistered(name);
});

When(/^Menceklist checkbox Unidentified Patient$/, async () => {
	await registerAPatientPage.ceklistUnidentifiedPatient();
});



import elementHelper from "../helper/element-helper.mjs";
import homeKey from "../key-definitions/home-keys.mjs";
import registerAPatientKey from "../key-definitions/register-a-patient-screen-keys.mjs";
import patientDetailsKey from "../key-definitions/patient-details-screen-keys.mjs";
import { assert } from "chai";

class RegisterAPatientPage{

    async clickRegisterAPatientMenu(){
        await elementHelper.click(homeKey.registerAPatientMenu);
    };

    async verifyRegisterAPatientPage(){
        await elementHelper.validateTextEqual(registerAPatientKey.headerScreen, "Register a patient");
    };
    
    async inputGivenName(name){
        await elementHelper.setValue(registerAPatientKey.inputGivenName, name);
    };

    async verifyGivenNameInputed(name){
        await elementHelper.validateValueEqual(registerAPatientKey.inputGivenName, name);
    };

    async inputMiddleName(name){
        await elementHelper.setValue(registerAPatientKey.inputMiddleName, name);
    };

    async verifyMiddleNameInputed(name){
        await elementHelper.validateValueEqual(registerAPatientKey.inputMiddleName, name);
    };

    async inputFamilyName(name){
        await elementHelper.setValue(registerAPatientKey.inputFamilyName, name);
    };

    async verifyFamilyNameInputed(name){
         await elementHelper.validateValueEqual(registerAPatientKey.inputFamilyName, name);
    };

    async clickNextButton(){
        await elementHelper.click(registerAPatientKey.nextButton);
    };

    async verifyGenderSection(){
        await elementHelper.waitForExist(registerAPatientKey.sectionGender);
    };

    async chooiseGender(gender){
        switch (gender) {
            case "Male":
                await elementHelper.click(registerAPatientKey.selectMale);
                break;
            case "Female":
                await elementHelper.click(registerAPatientKey.selectFemale);
                break;
            default:
                break;
        };
    };

    async verifyGenderChooised(gender){
        switch (gender) {
            case "Male":
                await elementHelper.validateTextEqual(registerAPatientKey.selectMale, gender);
                break;
            case "Female":
                await elementHelper.validateTextEqual(registerAPatientKey.selectFemale, gender);
                break;
            default:
                break;
        };
    };

    async verifyBirthdateSection(){
        await elementHelper.waitForExist(registerAPatientKey.sectionBirthdate);
    };

    async inputDayBirthdate(date){
        await elementHelper.setValue(registerAPatientKey.inputDay, date);
    };

    async verifyDayBirthdateInputed(date){
        await elementHelper.validateValueEqual(registerAPatientKey.inputDay, date);
    };

    async inputMonthBirthdate(month){
        await elementHelper.click(registerAPatientKey.selectMonth);
        await elementHelper.click(registerAPatientKey.selectMonth);
        await elementHelper.pause(1);
        await $(registerAPatientKey.selectMonth).selectByVisibleText(month);
    };

    async verifyMonthBirthdateInputed(month){
        await elementHelper.validateTextContain(registerAPatientKey.selectMonth, month);
    };

    async inputYearBirthdate(year){
        await elementHelper.setValue(registerAPatientKey.inputYear, year);
    };

    async verifyYearBirthdateInputed(year){
        await elementHelper.validateValueEqual(registerAPatientKey.inputYear, year);
    };

    async verifyAddressSection(){
        await elementHelper.waitForExist(registerAPatientKey.sectionAddress);
    };

    async inputAddress(address){
        await elementHelper.setValue(registerAPatientKey.inputAddress, address);
    };

    async verifyAddressInputed(address){
        await elementHelper.validateValueEqual(registerAPatientKey.inputAddress, address);
    };

    async inputAddress2(address){
        await elementHelper.setValue(registerAPatientKey.inputAddress2, address);
    };

    async verifyAddress2Inputed(address){
        await elementHelper.validateValueEqual(registerAPatientKey.inputAddress2, address);
    };

    async inputCity(city){
        await elementHelper.setValue(registerAPatientKey.inputCity, city);
    };

    async verifyCityInputed(city){
        await elementHelper.validateValueEqual(registerAPatientKey.inputCity, city);
    };

    async inputState(state){
        await elementHelper.setValue(registerAPatientKey.inputState, state);
    };

    async verifyStateInputed(state){
        await elementHelper.validateValueEqual(registerAPatientKey.inputState, state);
    };

    async inputCountry(country){
        await elementHelper.setValue(registerAPatientKey.inputCountry, country);
    };

    async verifyCountryInputed(country){
        await elementHelper.validateValueEqual(registerAPatientKey.inputCountry, country);
    };

    async inputPostalCode(postalcode){
        await elementHelper.setValue(registerAPatientKey.inputPostalCode, postalcode);
    };

    async verifyPostalCodeInputed(postalcode){
        await elementHelper.validateValueEqual(registerAPatientKey.inputPostalCode, postalcode);
    };

    async verifySectionPhoneNumber(){
        await elementHelper.waitForExist(registerAPatientKey.sectionPhoneNumber);
    };

    async inputPhoneNumber(phoneNumber){
        await elementHelper.setValue(registerAPatientKey.inputPhoneNumber, phoneNumber);
    };

    async verifyPhoneNumberInputed(phoneNumber){
        await elementHelper.validateValueEqual(registerAPatientKey.inputPhoneNumber, phoneNumber);
    };

    async verifySectionRelatives(){
        await elementHelper.waitForExist(registerAPatientKey.sectionRelatives);
    };

    async chooseRelationshipType(type){
        await elementHelper.click(registerAPatientKey.selectRelationshipType);
        await elementHelper.pause(1);
        await $(registerAPatientKey.selectRelationshipType).selectByVisibleText(type);
    };

    async verifyRelationTypeChooised(type){
        await elementHelper.validateTextContain(registerAPatientKey.selectRelationshipType, type);
    };

    async inputPersoneName(name){
        await elementHelper.setValue(registerAPatientKey.relationshipPersonName, name);
    };

    async verifyPersoneNameInputed(name){
        await elementHelper.validateValueEqual(registerAPatientKey.relationshipPersonName, name);
    };

    async verifySectionConfirm(){
        await elementHelper.waitForExist(registerAPatientKey.sectionConfirm);
    };

    async clickConfirmButton(){
        await elementHelper.click(registerAPatientKey.confirmButton);
        await elementHelper.pause(2);
    };

    async verifyPatientRegistered(name){
        let personName = name.split(" ")[0];
        let middleName = name.split(" ")[1];
        let familyName = name.split(" ")[2];
        await elementHelper.validateTextEqual(patientDetailsKey.personName, personName);
        await elementHelper.validateTextEqual(patientDetailsKey.middleName, middleName);
        await elementHelper.validateTextEqual(patientDetailsKey.familyName, familyName);
    };

    async ceklistUnidentifiedPatient(){
        await elementHelper.click(registerAPatientKey.CheckboxUnidentifiedPatient);
    };
    
    
}
const registerAPatientPage = new RegisterAPatientPage();
export default registerAPatientPage;
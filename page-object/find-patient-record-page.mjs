import elementHelper from "../helper/element-helper.mjs";
import homeKey from "../key-definitions/home-keys.mjs";
import findPatientKey from "../key-definitions/find-patient-screen-keys.mjs";
import patientDetailsKey from "../key-definitions/patient-details-screen-keys.mjs";
import { assert } from "chai";

class FindPatientRecordPage{
    
    async clickFindPatientMenu(){
        await elementHelper.click(homeKey.findAPatientMenu);
    };

    async verifyFindPatientPage(){
        await elementHelper.validateTextEqual(findPatientKey.headerScreen, "Find Patient Record");
    };

    async searchPatient(name){
        await elementHelper.setValue(findPatientKey.searchPatient, name);
        await elementHelper.pause(3);
    };

    async verifyPatientSearched(name){
        await elementHelper.validateTextContain(findPatientKey.valueName, name);
    };

    async viewPatientDetail(name){
        await elementHelper.click(findPatientKey.valueName);
    };

    async verifyPatientDetail(name){
        let personName = name.split(" ")[0];
        let familyName = name.split(" ")[1];
        await elementHelper.validateTextEqual(patientDetailsKey.personName, personName);
        await elementHelper.validateTextEqual(patientDetailsKey.familyName, familyName);
    };

    async showContactInfo(){
        await elementHelper.click(patientDetailsKey.showContactInfo);
    };

    async contactInfoExpanded(){
        await elementHelper.waitForExist(patientDetailsKey.contentContactInfo);
    };

    async noMatchingRecord(){
        await elementHelper.waitForExist(findPatientKey.noData);
    };

    async clickButtonNext(){
        await elementHelper.click(findPatientKey.buttonNext);
    };

    async clickButtonPrev(){
        await elementHelper.click(findPatientKey.buttonPrevious);
    };
}
const findPatientRecordPage = new FindPatientRecordPage();
export default findPatientRecordPage;
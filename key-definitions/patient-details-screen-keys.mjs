class PatientDetailsKeys {
    personName = `//*[@class="PersonName-givenName"]`;
    middleName = `//*[@class="PersonName-middleName"]`;
    familyName = `//*[@class="PersonName-familyName"]`;
    showContactInfo = `//*[@id="coreapps-showContactInfo"]`;
    contentContactInfo = `//*[@id="contactInfoContent"]`;
}
const patientDetailsKeys = new PatientDetailsKeys();
export default patientDetailsKeys;
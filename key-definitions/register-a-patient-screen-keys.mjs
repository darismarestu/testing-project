class RegisterAPatientKeys {
    headerScreen = `//*[@id="content"]/h2`;
    demographicsMenu = `//*[@id="demographics_label"]`;
    nameSubmenu = `//*[@id="formBreadcrumb"]/li[1]/ul/li[1]`
    genderSubmenu = `//*[@id="genderLabel"]`;
    birthdateSubmenu = `//*[@id="birthdateLabel"]`; 
    contactInfoMenu = `//*[@id="contactInfo_label"]`;
    addressSubmenu = `//*[@id="formBreadcrumb"]/li[2]/ul/li[1]/span`;
    phoneNumberSubmenu = `//*[@id="formBreadcrumb"]/li[2]/ul/li[2]/span`;
    relationshipsMenu = `//*[@id="relationships-info_label"]`;
    relativesSubmenu = `//*[@id="formBreadcrumb"]/li[3]/ul/li/span`;
    confirmMenu = `//*[@id="confirmation_label"]`;

    inputGivenName = `//*[@name="givenName"]`;
    inputMiddleName = `//*[@name="middleName"]`;
    inputFamilyName = `//*[@name="familyName"]`;
    CheckboxUnidentifiedPatient = `//*[@id="checkbox-unknown-patient"]`;

    selectMale = `//*[@id="gender-field"]/option[1]`
    selectFemale = `//*[@id="gender-field"]/option[2]`;

    inputDay = `//*[@id="birthdateDay-field"]`;
    selectMonth = `//*[@id="birthdateMonth-field"]`;
    inputYear = `//*[@id="birthdateYear-field"]`;

    chooseJanuary = `//*[@id="birthdateMonth-field"]/option[2]`;

    inputEstimedYears = `//*[@id="birthdateYears-field"]`;
    inputEstimedMonths = `//*[@id="birthdateMonths-field"]`;

    inputAddress = `//*[@id="address1"]`;
    inputAddress2 = `//*[@id="address2"]`;
    inputCity = `//*[@id="cityVillage"]`;
    inputState = `//*[@id="stateProvince"]`;
    inputCountry = `//*[@id="country"]`;
    inputPostalCode = `//*[@id="postalCode"]`;

    inputPhoneNumber = `//*[@name="phoneNumber"]`;

    selectRelationshipType = `//*[@id="relationship_type"]`;
    relationshipPersonName = `//*[@placeholder="Person Name"]`;

    chooseDoctor = `//*[@id="relationship_type"]/option[2]`;

    cancelButton = `//*[@id="cancelSubmission"]`;
    confirmButton = `//*[@id="submit"]`;

    nextButton = `//*[@id="next-button"]`;
    prevButton = `//*[@id="prev-button"]`;

    sectionName = `//*[@id="demographics-name"]`
    sectionGender = `//*[@id="demographics-gender"]`;
    sectionBirthdate = `//*[@id="demographics-birthdate"]`;
    sectionAddress = `//*[@id="contactInfo"]`;
    sectionPhoneNumber = `//*[@id="phoneNumberLabel"]`;
    sectionRelatives = `//*[@id="relationships-info"]`;
    sectionConfirm = `//*[@id="confirmation"]`;


}
const registerAPatientKeys = new RegisterAPatientKeys();
export default registerAPatientKeys;
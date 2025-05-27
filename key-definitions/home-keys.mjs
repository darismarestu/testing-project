class HomeKeys {
    homeContent = `//*[@id="content"]`;
    selectLocation = `//*[@id="selected-location"]`;
    sectionLocation = `//*[@id="session-location"]`;
    inpatientWard = `//*[@locationname="Inpatient Ward"]`;
    isolationWard = `//*[@locationname="Isolation Ward"]`;  
    laboratory = `//*[@locationname="Laboratory"]`;  
    outpatientClinic = `//*[@locationname="Outpatient Clinic"]`;  
    pharmacy = `//*[@locationname="Pharmacy"]`;  
    registrationDesk= `//*[@locationname"Registration Desk"]`; 
    logoutButton = `//*[@href="/openmrs/appui/header/logout.action?successUrl=openmrs"]`;
    findAPatientMenu = `//*[@id="coreapps-activeVisitsHomepageLink-coreapps-activeVisitsHomepageLink-extension"]`;
    activeVisitsMenu = `//*[@id="org-openmrs-module-coreapps-activeVisitsHomepageLink-org-openmrs-module-coreapps-activeVisitsHomepageLink-extension"]`;
    captureVitalsMenu = `//*[@id="referenceapplication-vitals-referenceapplication-vitals-extension"]`;
    registerAPatientMenu = `//*[@id="referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension"]`;
    appointmentSchedulingMenu = `//*[@id="appointmentschedulingui-homeAppLink-appointmentschedulingui-homeAppLink-extension"]`;
    reportsMenu = `//*[@id="reportingui-reports-homepagelink-reportingui-reports-homepagelink-extension"]`;
    dataManagementMenu = `//*[@id="coreapps-datamanagement-homepageLink-coreapps-datamanagement-homepageLink-extension"]`;
    configureMetadataMenu = `//*[@id="org-openmrs-module-adminui-configuremetadata-homepageLink-org-openmrs-module-adminui-configuremetadata-homepageLink-extension"]`;
    systemAdministrationmenu = `//*[@id="coreapps-systemadministration-homepageLink-coreapps-systemadministration-homepageLink-extension"]`;
}
const homeKeys = new HomeKeys();
export default homeKeys;
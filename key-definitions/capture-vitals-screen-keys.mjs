class CaptureVitalsKeys {
    headerScreen = `//*[@id="content"]/h2`;
    searchPatient = `//*[@id="patient-search"]`;
    buttonClearSearchPatient = `//*[@id="patient-search-clear-button"]`;
    valueIdentifier = `//*[@id="patient-search-results-table"]/tbody/tr[1]/td[1]`;
    valueName = `//*[@id="patient-search-results-table"]/tbody/tr[1]/td[2]`;
    valueGender = `//*[@id="patient-search-results-table"]/tbody/tr[1]/td[3]`;
    valueAge = `//*[@id="patient-search-results-table"]/tbody/tr[1]/td[4]`;
    valueBirthdate = `//*[@id="patient-search-results-table"]/tbody/tr[1]/td[5]`;
    buttonFirst = `//*[@id="patient-search-results-table_first"]`;
    buttonPrevious = `//*[@id="patient-search-results-table_previous"]`;
    buttonNext = `//*[@id="patient-search-results-table_next"]`;
    buttonLast = `//*[@id="patient-search-results-table_last"]`;
    noData = `//*[@text()="No matching records found"]`;
       
}
const captureVitalsKeys = new CaptureVitalsKeys();
export default captureVitalsKeys;
class ActiveVisitsKeys {
    headerScreen = `//*[@id="content"]/h3`;
    inputSearch = `//*[@id="active-visits_filter"]/label/input`;
    valuePatientID = `//*[@id="active-visits"]/tbody/tr[1]/td[1]`
    valueName = `//*[@id="active-visits"]/tbody/tr[1]/td[2]`
    valueCheckIn = `//*[@id="active-visits"]/tbody/tr[1]/td[3]`
    valueLastSeen = `//*[@id="active-visits"]/tbody/tr[1]/td[4]`
    valueTypeofVisit = `//*[@id="active-visits"]/tbody/tr[1]/td[5]`
    viewDetails = `//*[@id="active-visits"]/tbody/tr[1]/td[2]/a`

}
const activeVisitsKeys = new ActiveVisitsKeys();
export default activeVisitsKeys;
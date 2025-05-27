import elementHelper from "../helper/element-helper.mjs";
import homeKey from "../key-definitions/home-keys.mjs";
import activeVisitsKey from "../key-definitions/active-visits-screen-keys.mjs";
import { assert } from "chai";

class ActiveVisitsPage{

    async clickActiveVisitsMenu(){
        await elementHelper.click(homeKey.activeVisitsMenu);
    };

    async verifyActiveVisitsPage(){
        await elementHelper.validateTextEqual(activeVisitsKey.headerScreen, "Active Visits");
    };

    async searchActiveVisits(name){
        await elementHelper.setValue(activeVisitsKey.inputSearch, name);
    };

    async verifyActiveVisitsSearched(name){
        await elementHelper.validateTextEqual(activeVisitsKey.valueName, name);
    };

    async viewActiveVisits(name){
        await elementHelper.click(activeVisitsKey.viewDetails);
    };
    
}
const activeVisitsPage = new ActiveVisitsPage();
export default activeVisitsPage;
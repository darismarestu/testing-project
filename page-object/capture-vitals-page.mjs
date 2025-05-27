import elementHelper from "../helper/element-helper.mjs";
import homeKey from "../key-definitions/home-keys.mjs";
import captureVitalsKey from "../key-definitions//capture-vitals-screen-keys.mjs";
import { assert } from "chai";

class CaptureVitalsPage{

    async clickCaptureVitalsMenu(){
        await elementHelper.click(homeKey.captureVitalsMenu);
    };

    async verifyCaptureVitalsPage(){
        await elementHelper.validateTextEqual(captureVitalsKey.headerScreen, "Capture Vitals for Patient")
    };
}
const captureVitalsPage = new CaptureVitalsPage();
export default captureVitalsPage;
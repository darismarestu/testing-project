import { When, Then } from "@wdio/cucumber-framework";
import captureVitalsPage from "../page-object/capture-vitals-page.mjs";


When(/^Meng-klik Capture Vitals menu$/, async () => {
	await captureVitalsPage.clickCaptureVitalsMenu();
});

Then(/^Menampilkan halaman Capture Vitals$/, async () => {
	await captureVitalsPage.verifyCaptureVitalsPage();
});


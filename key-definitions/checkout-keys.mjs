class CheckoutKeys {
    checkoutInfoContainer = `//*[@id="checkout_info_container"]`;
    inputFirstName = `//*[@id="first-name"]`;
    inputLastName = `//*[@id="last-name"]`;
    inputPostalCode = `//*[@id="postal-code"]`;
    btnCancel = `//*[@id="cancel"]`;
    btnContinue = `//*[@id="continue"]`;

    checkoutSummaryContainer = `//*[@id="checkout_summary_container"]`;
    btnCancel = `//*[@id="cancel"]`;
    btnFinish = `//*[@id="finish"]`;

    checkoutCompleteContainer = `//*[@id="checkout_complete_container"]`;
    btnBackToHome = `//*[@id="back-to-products"]`;

}
const checkoutKeys = new CheckoutKeys();
export default checkoutKeys;
import { assert } from "chai";
const timeout = 10000;

class selector {
  async back() {
    return driver.back();
  }

  async pause(seconds) {
    return browser.pause(seconds * 1000);
  }

  async addValue(selector, value) {
    await this.waitForDisplayed(selector);
    return $(selector).addValue(value);
  }

  async clearValue(selector) {
    await this.waitForDisplayed(selector);
    return $(selector).clearValue();
  }
  
  async click(selector) {
    await this.waitForDisplayed(selector);
    return $(selector).click();
  }
  
  async getText(selector) {
    await this.waitForDisplayed(selector);
    return $(selector).getText();
  }
  
  async getValue(selector) {
    await this.waitForDisplayed(selector);
    return $(selector).getValue();
  }
  
  async isClickable(selector) {
    return $(selector).isClickable();
  }
  
  async isDisplayed(selector) {
    return $(selector).isDisplayed();
  }
  
  async isEnabled(selector) {
    return $(selector).isEnabled();
  }
  
  async isExisting(selector) {
    return $(selector).isExisting();
  }
  
  async isSelected(selector) {
    return $(selector).isSelected();
  }
  
  async scrollIntoView(selector) {
    await this.waitForDisplayed(selector);
    return $(selector).scrollIntoView();
  }
  
  async setValue(selector, value) {
    await this.waitForDisplayed(selector);
    return $(selector).setValue(value);
  }
  
  async waitForClickable(selector) {
    return $(selector).waitForClickable({ timeout, timeoutMsg: "selector not clickable" });
  }
  
  async waitForDisplayed(selector) {
    return $(selector).waitForDisplayed({ timeout, timeoutMsg: "selector not display" });
  }
  
  async waitForEnabled(selector) {
    return $(selector).waitForEnabled({ timeout, timeoutMsg: "selector not enable" });
  }
  
  async waitForExist(selector) {
    return $(selector).waitForExist({ timeout, timeoutMsg: "selector not exist" });
  }

  async validateTextContain(selector, expectedResult) {
    await this.waitForDisplayed(selector);
    try {
      let actualText = await this.getText(selector);
      assert.ok(actualText.toLowerCase().includes(expectedResult.toLowerCase()));
      return true;
    } catch (error) {
      assert.fail(new Error(error));
    }
  }

  async validateTextEqual(selector, expectedResult) {
    await this.waitForDisplayed(selector);
    try {
      const actualText = await this.getText(selector);
      assert.equal(actualText, expectedResult, `the text is not match actual : ${actualText}, expect : ${expectedResult}`);
      return true;
    } catch (error) {
      assert.fail(new Error(error));
    }
  }

  async validateValueEqual(selector, expectedResult) {
    await this.waitForDisplayed(selector);
    try {
      const actualText = await this.getValue(selector);
      assert.equal(actualText, expectedResult, `data is not match, actual : ${actualText}, expected : ${expectedResult}`);
      return true;
    } catch (error) {
      assert.fail(new Error(error));
    }
  }

  async verifyEnable(selector) {
    await this.waitForDisplayed(selector);
    let val = await this.isEnabled(selector)
    console.log('IS IT ENABLED? : ' + val);
    if (val === true) {
      console.log('button is enable');
      return true;
    } else {
      assert.fail('button is disabled');
    }
  }

  async verifyDisable(selector) {
    await this.waitForDisplayed(selector);
    let val = await this.isEnabled(selector)
    console.log('IS IT ENABLED? : ' + val);
    if (val === false) {
      console.log('button is disabled');
      return true;
    } else {
      assert.fail('button is enable');
    }
  }

  async validateValueAtrribut(selector, attribute, expectedResult) {
    await this.waitForDisplayed(selector);
    try {
      let value = await $(selector).getAttribute(attribute);
      assert.equal(value, expectedResult, `data is not match, actual : ${value}, expected : ${expectedResult}`);
    } catch (error) {
      assert.fail('Error flag :' + error)
    }
  }
 
}

const elementHelper = new selector();
export default elementHelper;

module.exports = {
  '@tags' : ['dimensionspanel'],
  'open dimensions panel and set max width' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      
      //opens site
      .verify.elementPresent('h5')
      .moveToElement('h5', 1, 1)
      .doubleClick()

      //selects column
     .frame(0) //selects iframe - must call to select anything within iframe
      .waitForElementVisible('.bc-text', 1000)
      .click('.bc-text')
      .frame(null) //closes iframe

      //selects dimension
      .assert.elementPresent('div.btn[title="Dimensions"]')
      .click('div.btn[title="Dimensions"]')
      .verify.elementPresent('.ui-wrapper[title="Max Width"]')
      .setValue('input[type=text]', '500')
      .verify.valueContains('input[type=text]', '500')
      
      //close dimension panel
      .click('.svg-container')
      .verify.elementNotPresent('.panel-body')

      //verify dimension on container via ccs
      .frame(0) //selects iframe - must call to select anything within iframe
      .assert.cssProperty('.bc-text', 'max-width', '500px')
      .frame(null)
      .end();
    }
};
//.waitForElementVisible('[data-id="44856863-ffe6-44d4-8787-e0dad3c93ecf"]', 1000)
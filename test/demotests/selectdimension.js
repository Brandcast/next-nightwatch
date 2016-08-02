module.exports = {
  '@tags' : ['dimensionspanel'],
  'open dimensions panel' : function (browser) {
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

      //selects stroke
      .assert.elementPresent('div.btn[title="Dimensions"]')
      .click('div.btn[title="Dimensions"]')
      .verify.elementPresent('[id="width_2"]')
      .setValue('input[type=text]', '50')
      //.click('[id="border-all_2"]')
      
      //close stroke panel
      .click('.svg-container')
      .verify.elementNotPresent('.panel-body')

      //.frame(0) //selects iframe - must call to select anything within iframe
      //.assert.cssProperty('.bc-text', 'border-width', '1px')
      //.frame(null)
      .end();
    }
};
//.waitForElementVisible('[data-id="44856863-ffe6-44d4-8787-e0dad3c93ecf"]', 1000)
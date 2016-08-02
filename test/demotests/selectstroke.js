module.exports = {
  '@tags' : ['strokepanel'],
  'open stroke panel' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      //opens site
      .verify.elementPresent('h5')
      .moveToElement('h5', 1, 1)
      .doubleClick()

      //selects column
     .frame(0) //selects iframe - must call for 
      .waitForElementVisible('[data-id="44856863-ffe6-44d4-8787-e0dad3c93ecf"]', 1000)
      .click('span[data-id="44856863-ffe6-44d4-8787-e0dad3c93ecf"]')
      .frame(null) //closes iframe

      //selects stroke
      .assert.elementPresent('div.btn[title="Stroke"]')
      .click('div.btn[title="Stroke"]')
      .verify.elementPresent('[id="border-all_2"]')
      .click('[id="border-all_2"]')
      .pause(500)

      //close stroke panel
      .click('.svg-container')
      .verify.elementNotPresent('.panel-body')
      .end();
    }
};
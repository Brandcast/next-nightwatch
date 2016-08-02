module.exports = {
  '@tags' : ['colorpanel'],
  'open color panel' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .verify.elementPresent('h5')
      .moveToElement('h5', 1, 1)
      .doubleClick()
      .assert.elementPresent('div.btn[title="Color"]')
      .click('div.btn[title="Color"]')
      .pause(500)
    //}

    .frame(0) //selects iframe - must call to select anything within iframe
      .waitForElementVisible('[data-id="44856863-ffe6-44d4-8787-e0dad3c93ecf"]', 1000)
      .click('span[data-id="44856863-ffe6-44d4-8787-e0dad3c93ecf"]')
      .frame(null) //closes iframe
    
    //select color
      .verify.elementPresent('.spectrum-color-band')
      .moveToElement('.spectrum-color-band', 75, 25)
      .mouseButtonClick()

    //closes color panel
      .click('.svg-container')
      .pause(500)
      .verify.elementNotPresent('.panel-body.dormant')
    
    //verify color applied via css
     .frame(0) //selects iframe - must call to select anything within iframe
      .assert.cssProperty('.bc-text', 'color', 'rgba(134, 122, 191, 1)')
      .frame(null)
      .end();
    }
};
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
    //select color
    .verify.elementPresent('.spectrum-color-band')
    .click('.spectrum-color-band')
    .end();
    //'close color panel' : function (browser) {
    //browser
     // .assert.elementPresent('.panel-body.dormant')
      //.click('.svg-container')
      //.verify.elementNotPresent('.panel-body.dormant')

      
      //.end();
    }
};
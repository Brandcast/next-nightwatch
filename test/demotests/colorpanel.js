module.exports = {
  '@tags' : ['colorpanel'],
  'open color panel' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('div.btn[title="Color"]')
      .click('div.btn[title="Color"]')
      .pause(500)
    //}

    //'close color panel' : function (browser) {
    //browser
      .assert.elementPresent('.panel-body.dormant')
      .click('.svg-container')
      .verify.elementNotPresent('.panel-body.dormant')
      .end();
    }
};
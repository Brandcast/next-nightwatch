module.exports = {
  '@tags' : ['strokepanel'],
  'open stroke panel' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('div.btn[title="Stroke"]')
      .click('div.btn[title="Stroke"]')
      .pause(500)
    //}

    //'close color panel' : function (browser) {
    //browser
      .assert.elementPresent('.panel-body')
      .click('.svg-container')
      .verify.elementNotPresent('.panel-body')
      .end();
    }
};
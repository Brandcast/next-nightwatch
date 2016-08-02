module.exports = {
  '@tags' : ['dimensionspanel'],
  'open dimensions panel' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('div.btn[title="Dimensions"]')
      .click('div.btn[title="Dimensions"]')
      .pause(500)
    //}

    //'close dimensions panel' : function (browser) {
    //browser
      .assert.elementPresent('.panel-body')
      .click('.svg-container')
      .verify.elementNotPresent('.panel-body')
      .end();
    }
};
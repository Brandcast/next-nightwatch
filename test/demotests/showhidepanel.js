module.exports = {
  '@tags' : ['dimensionspanel'],
  'openshowhidepanel' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      

        page = browser.page.openshowhidepanel();
        page.openshowhidepanel()
  
      browser.assert.elementPresent('.panel-body')
      .click('.svg-container')
      .verify.elementNotPresent('.panel-body')
      .end();
    }
};
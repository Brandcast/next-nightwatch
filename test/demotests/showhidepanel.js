module.exports = {
  '@tags' : ['dimensionspanel'],
  'openshowhidepanel' : function (browser) {
   var page = browser.page.pageload();

    page.navigate()
      page.pageload();
      

      page = browser.page.openshowhidepanel();
      page.openshowhidepanel()
  
      browser.assert.elementPresent('.panel-body')
      .click('.svg-container')
      .verify.elementNotPresent('.panel-body')
      .end();
    }
};
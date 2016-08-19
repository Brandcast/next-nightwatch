module.exports = {
  '@tags' : ['colorpanel', 'colorswatch'],
  'select black, white, and tranparent swatches in color panel' : function (browser) {
     var page = browser.page.pageload();

      page.navigate()
        page.pageload();
    
      page = browser.page.opensitemap();
        page.opensitemap();

      page = browser.page.opensite();
        page.opensite();
    //}

      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('.bc-text', 1000)
        .click('.bc-text')
        .frame(null) //closes iframe

      page = browser.page.openshowhidepanel();
        page.openshowhidepanel();

      page = browser.page.mobilebtn();  
        page.mobilebtn();

         //verify color applied via css
      browser.frame(0) //selects iframe - must call to select anything within iframe
      browser.assert.elementPresent('.bc-text.bc-mobile-hidden')
        browser.frame(null)

      page = browser.page.closepanel();  
        page.closepanel();

        browser.end();
    }
};
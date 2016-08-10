module.exports = {
  '@tags' : ['colorpanel'],
  'open color panel' : function (browser) {
     var page = browser.page.pageload();

      page.navigate()
        page.pageload();
    
      page = browser.page.opensite();
        page.opensite();

      page = browser.page.opencolorpanel();
        page.opencolorpanel()
    //}

      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('.bc-text', 1000)
        .click('.bc-text')
        .frame(null) //closes iframe


      page = browser.page.colorspectrum();  
        page.colorspectrum();
      
      //browser.verify.elementPresent('.ui-wrapper[title="A"] .select-input-wrapper input[type=text]')

      page = browser.page.opacityinputtext();  
        page.opacityinputtext();
      
      page = browser.page.closepanel();  
        page.closepanel();
    
        //verify color applied via css
      //browser.frame(0) //selects iframe - must call to select anything within iframe
        //assert.cssProperty('.bc-text', 'color', 'rgba(191, 122, 122, 1)')
        //.frame(null)
        browser.end();
    }
};
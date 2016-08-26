module.exports = {
  '@tags' : ['colorpanel', 'opacity'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();

        page = browser.page.opensitemap();
          page.opensitemap();
    
        page = browser.page.opensite();
          page.opensite();
    },

      'Step 2: open color panel and select opacity via slider' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.opencolorpanel();
          page.opencolorpanel();

        page = browser.page.colorspectrum();  
          page.colorspectrum();
      
        page = browser.page.selectopacity();  
          page.selectopacity();
        
        browser.moveToElement('.ui-wrapper[title="Opacity"] .slider-wrapper input[type=range]', 15, 6)
            .mouseButtonDown(0)
        browser.moveToElement('.ui-wrapper[title="Opacity"] .slider-wrapper input[type=range]', 90, 6)
        browser.moveToElement('.ui-wrapper[title="Opacity"] .slider-wrapper input[type=range]', 50, 6)
            .mouseButtonUp(0)
      
        page = browser.page.closepanel();  
          page.closepanel();
    },

      'Step 3: verify opacity' : function (browser) {
        //verify color applied via css
        browser.frame(0) //selects iframe - must call to select anything within iframe
         browser.verify.elementPresent('.focused.component-wrapper')
          .assert.cssProperty('.focused.component-wrapper', 'background-color', 'rgba(191, 122, 122, 0.862745)')
        browser.frame(null);
        browser.end();
    }
};
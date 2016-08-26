module.exports = {
  '@tags' : ['colorpanel', 'backgroundcolor'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();
    
        page = browser.page.opensitemap();
          page.opensitemap();

        page = browser.page.opensite();
         page.opensite();
    },

    'Step 2: set text color to red' : function (browser) {
       browser.frame(0) //selects iframe - must call to select anything within iframe
         .waitForElementVisible('.bc-text', 1000)
         .click('.bc-text')
         .frame(null) //closes iframe

        page = browser.page.opencolorpanel();
          page.opencolorpanel();

        page = browser.page.selecttextcolorbtn();  
          page.selecttextcolorbtn();

        page = browser.page.colorspectrum();  
          page.colorspectrum();
      
        page = browser.page.closepanel();  
          page.closepanel();
    },

    'Step 3: verify text color is red' : function (browser) {
        //verify color applied via css
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.cssProperty('.bc-text', 'color', 'rgba(191, 122, 122, 1)')
          browser.frame(null)
          browser.end();
    }
};
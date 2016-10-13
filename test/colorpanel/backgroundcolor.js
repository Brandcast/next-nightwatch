module.exports = {
  '@tags' : ['colorpanel'],
    'Step 1: page load'  : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();

        page = browser.page.openwebsitebtn();
          page.openwebsitebtn();
    
        page = browser.page.opensitemap();
          page.opensitemap();

        page = browser.page.opensite();
          page.opensite();
    },

      'Step 2: set text component background color to red'  : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
          .click('[data-qa-id="/grid/column/text"]')
          .frame(null) //closes iframe

        page = browser.page.opencolorpanel();
          page.opencolorpanel();

        page = browser.page.backgroundcolorbtn();
          page.backgroundcolorbtn();

        page = browser.page.colorspectrum();  
          page.colorspectrum();

          browser.pause(300);
    },
      
      'Step 3: verify background color css is set to red' : function (browser) {
          //verify color applied via css
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.verify.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'background-color', 'rgba(191, 123, 123, 1)')
          browser.frame(null)
     },
      
      'Step 4: clear background color and close panel' : function (browser) {
        page = browser.page.backgroundcolorbtn();
          page.backgroundcolorbtn();

        page = browser.page.colorswatchtransparent();  
          page.colorswatchtransparent();

          browser.pause(300);

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.verify.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'background-color', 'rgba(0, 0, 0, 0)')
          browser.frame(null)


        page = browser.page.closepanel();  
          page.closepanel();
          
          browser.end();
    }
};
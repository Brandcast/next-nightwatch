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

      'Step 2: set text component stroke color to red'  : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
          .click('[data-qa-id="/grid/column/text"]')
          .frame(null) //closes iframe

        page = browser.page.opencolorpanel();
          page.opencolorpanel();

        page = browser.page.strokecolorbtn();
          page.strokecolorbtn();

        page = browser.page.colorspectrum();  
          page.colorspectrum();
          
        page = browser.page.closepanel();  
          page.closepanel();
    },
      
      'Step 3: verify stroke color is set' : function (browser) {
          //verify color applied via css
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'border-color', 'rgb(191, 122, 122)')
          browser.frame(null)
          browser.end();
    }
};
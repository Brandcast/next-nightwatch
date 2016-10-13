module.exports = {
  'disabled' : true,
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

        browser.pause(300)
    },
      
      'Step 3: verify stroke color is set' : function (browser) {
          //verify color applied via css
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'border-color', 'rgb(191, 123, 123)')
          browser.frame(null)
    },
      
      'Step 4: remove stroke and close panel' : function (browser) {
        page = browser.page.colorswatchtransparent();  
         page.colorswatchtransparent();

        //  browser.pause(300)

        //   //verify color applied via css
        // browser.frame(0) //selects iframe - must call to select anything within iframe
        //   browser.assert.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'border-color', 'rgb(0, 0, 0, 1)')
        //   browser.frame(null)

        //  page = browser.page.closepanel();  
        //   page.closepanel();

        // page = browser.page.openstrokepanel();
        //   page.openstrokepanel()

        // page = browser.page.borderallsides();
        //   page.borderallsidesbtndisabled()
        
        // page = browser.page.closepanel();  
        //   page.closepanel();
        //   browser.end();
    }
};
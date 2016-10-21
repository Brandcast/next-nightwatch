module.exports = {
  '@tags' : ['dimensionspanel', 'grid'],
    'Step 1: page load' : function (browser) {
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

    'Step 2: select grid layout and open dimensions panel' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
        .click('[data-qa-id="/grid/column/text"]')
        .frame(null) //closes iframe

        page = browser.page.gridlayoutbtn();  
          page.gridlayoutbtn();

        page = browser.page.dimensionspanel();  
          page.opendimensionspanel();
    },
      
    'Step 3: apply and verify 5 gutter width via slider' : function (browser) {
      browser.verify.elementPresent('[title="Gutter Width"]')
      browser.moveToElement('.ui-wrapper[title="Gutter Width"] .slider-wrapper input[type=range]', 50, 6)
          .mouseButtonDown(0)
            .frame(0) //selects iframe - must call to select anything within iframe
            .waitForElementVisible('.bc-grid.padding-5', 1000)
            .frame(null) //closes iframe
          .mouseButtonUp(0)
      
      page = browser.page.closepanel();  
      page.closepanel();
      
      browser.end();
    }
};
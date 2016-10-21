module.exports = {
  '@tags' : ['dimensionspanel', 'hideoverflow'],
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
    
    'Step 2: open dimensions panel' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
        .click('[data-qa-id="/grid/column/text"]')
        .frame(null) //closes iframe
      
      page = browser.page.dimensionspanel();
        page.opendimensionspanel()
  },

    'Step 3: check "hide overflow" button and verify overflow is hidden on css' : function (browser) {
      page = browser.page.hideoverflowbtn();
        page.hideoverflowbtn()

      browser.pause(300)
    
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .assert.cssProperty('.focused.component-wrapper', 'overflow', 'hidden')
      browser.frame(null)
  },
      
    'Step 4: uncheck "hide overflow" button and verify overflow is visible on css' : function (browser) {
      page = browser.page.hideoverflowbtn();
        page.hideoverflowbtn()

      browser.pause(300)
    
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .assert.cssProperty('.focused.component-wrapper', 'overflow', 'visible')
      browser.frame(null)

       page = browser.page.closepanel();  
        page.closepanel();
     
      browser.end();
    }
};

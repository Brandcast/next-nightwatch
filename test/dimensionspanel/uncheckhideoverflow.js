module.exports = {
  '@disabled': true,
  '@tags' : ['dimensionspanel', 'hideoverflow'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

      page.navigate()
       page.pageload();
    
      page = browser.page.opensitemap();
        page.opensitemap();

      page = browser.page.opensite();
        page.opensite(); 
  },
    
    'Step 2: open dimensions panel' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('.bc-text', 1000)
        .click('.bc-text')
        .frame(null) //closes iframe
      
      page = browser.page.dimensionspanel();
        page.opendimensionspanel()
  },

    'Step 3: check "hide overflow" button' : function (browser) {
      page = browser.page.hideoverflowbtn();
        page.hideoverflowbtn()

      page = browser.page.closepanel();  
        page.closepanel();
  },
      
    'Step 4: verify "hide overflow" is applied' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .assert.cssProperty('.focused.component-wrapper', 'overflow', 'hidden')
      browser.frame(null)
  },

    'Step 5: uncheck "hide overflow" button' : function (browser) {
      page = browser.page.dimensionspanel();
        page.opendimensionspanel()

    page = browser.page.hideoverflowbtn();
        page.hideoverflowbtn()

      page = browser.page.closepanel();  
        page.closepanel();
  },
      
    'Step 6: verify "hide overflow" is not applied' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .assert.cssProperty('.focused.component-wrapper', 'overflow', 'initial')
      browser.frame(null)
      browser.end();
  },
};

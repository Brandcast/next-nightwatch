module.exports = {
  //'disabled' : true,
  '@tags' : ['imagecomponent'],
  'step 1: load page' : function (browser) {
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

    'step 2: select existing image' : function (browser) {

      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementPresent('[data-qa-id="/grid"]', 1000)
        .click('.bc-grid-wrapper.bc-center[data-qa-id="/grid"]')
      browser.frame(null) //closes iframe

      page = browser.page.gridlayoutbtn();  
          page.gridlayoutbtn();

      browser.frame(0) //selects iframe - must call to select anything within iframe   
        .verify.elementPresent('.focused.bc-center[data-qa-id="/grid"]')
      browser.frame(null) //closes iframe

      browser.end();
    }
};
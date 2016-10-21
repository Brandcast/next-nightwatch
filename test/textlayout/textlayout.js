module.exports = {
  '@tags' : ['textlayout'],
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

    'step 2: select textlayout' : function (browser) {

      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementPresent('[data-qa-id="/grid/column/text"]', 1000)
        .click('[data-qa-id="/grid/column/text"]')
        .frame(null) //closes iframe

        page = browser.page.gridlayoutbtn();  
        page.gridlayoutbtn();

       page = browser.page.textlayoutbtn();  
        page.textlayoutbtn();

        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
        browser.frame(null) //closes iframe

      browser.end();
    }
};
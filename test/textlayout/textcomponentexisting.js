module.exports = {
  //'disabled' : true,
  '@tags' : ['textcomponent'],
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

    'step 2: verify existing text component is visible' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementPresent('.focused [data-qa-id="/grid/column/text"]', 1000)
        .click('.focused [data-qa-id="/grid/column/text"]')
        .verify.elementPresent()
        .frame(null) //closes iframe

      browser.end();
    }
};
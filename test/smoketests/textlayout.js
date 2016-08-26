module.exports = {
  '@tags' : ['textlayout'],
  'step 1: load page' : function (browser) {
     var page = browser.page.pageload();

      page.navigate()
        page.pageload();
    
      page = browser.page.opensitemap();
        page.opensitemap();

      page = browser.page.opensite();
        page.opensite();
    },

    'step 2: select textlayout' : function (browser) {

      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('.bc-text', 1000)
        .click('.bc-text')
        .frame(null) //closes iframe

       page = browser.page.textlayoutbtn();  
        page.textlayoutbtn();

      //browser.verify.elementPresent('div.btn-sudo-dom current' '.btn-sudo-dom-label[title="grid"]')
      
      browser.end();
    }
};
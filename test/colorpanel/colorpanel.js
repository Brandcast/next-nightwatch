module.exports = {
 '@disabled': true,
  '@tags' : ['colorpanel'],
    'step 1: load page': function (browser) {
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

    'step 2: open and close color panel' : function (browser) {

      page = browser.page.opencolorpanel();
        page.opencolorpanel()

      page = browser.page.closepanel();  
        page.closepanel();
      
      browser.end();
  },
};
module.exports = {
  '@tags' : ['dimensionspanel'],
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

      'step 2: open and close dimensions panel' : function (browser) {
        page = browser.page.dimensionspanel();
          page.opendimensionspanel()
     
        page = browser.page.closepanel();  
          page.closepanel();

        browser.end();
    }
};
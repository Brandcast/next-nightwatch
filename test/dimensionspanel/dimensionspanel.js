module.exports = {
  '@tags' : ['dimensionspanel'],
    'step 1: load page' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();

        page = browser.page.openwebsitebtn();
          page.openwebsitebtn();
    },

      'step 2: open and clsoe dimensions panel' : function (browser) {
        page = browser.page.opendimensionspanel();
          page.opendimensionspanel()
     
        page = browser.page.closepanel();  
          page.closepanel();

        browser.end();
    }
};
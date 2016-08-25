module.exports = {
  '@tags' : ['colorpanel'],
    'step 1: load page': function (browser) {
      var page = browser.page.pageload();

      page.navigate()
        page.pageload();
  },

    'step 2: open and close color panel' : function (browser) {

      page = browser.page.opencolorpanel();
        page.opencolorpanel()

      page = browser.page.closepanel();  
        page.closepanel();
      
      browser.end();
  },
};
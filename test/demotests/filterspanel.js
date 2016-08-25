module.exports = {
  '@tags' : ['filterspanel'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

      page.navigate()
        page.pageload();
  },    

    'Step 2: open and close filters panel' : function (browser) {
      page = browser.page.openfilterspanel();
        page.openfilterspanel()
  
       page = browser.page.closepanel();  
        page.closepanel();

      browser.end();
    }
};
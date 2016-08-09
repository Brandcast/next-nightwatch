module.exports = {
  '@tags' : ['dimensionspanel'],
  'open dimensions panel' : function (browser) {
     var page = browser.page.pageload();

      page.navigate()
        page.pageload();

      page = browser.page.opendimensionspanel();
        page.opendimensionspanel()
     
      page = browser.page.closepanel();  
        page.closepanel();

      browser.end();
    }
};
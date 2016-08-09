module.exports = {
  '@tags' : ['dimensionspanel'],
  'openshowhidepanel' : function (browser) {
   var page = browser.page.pageload();

    page.navigate()
      page.pageload();
      

      page = browser.page.openshowhidepanel();
        page.openshowhidepanel()
  
       page = browser.page.closepanel();  
        page.closepanel();

      browser.end();
    }
};
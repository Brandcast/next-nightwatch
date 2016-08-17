module.exports = {
'@tags' : ['colorpanel'],
   'undock color panel' : function (browser) {
      var page = browser.page.pageload();

      page.navigate()
        page.pageload();
   
      page = browser.page.opensitemap();
        page.opensitemap(); 

      page = browser.page.opensite();
        page.opensite(); 

      page = browser.page.opencolorpanel();
        page.opencolorpanel();
      
      page = browser.page.undockpanel();
        page.undockpanel();

        browser.end();
  }
};

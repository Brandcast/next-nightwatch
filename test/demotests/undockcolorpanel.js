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

      browser.getLocation(".panel-body.dormant", function (location) {
          console.log(location.value.x, location.value.y);
         });
      
      page = browser.page.undockpanel();
        page.undockpanel();

      browser.getLocation(".panel-body.dormant", function (location) {
          console.log(location.value.x, location.value.y);
         });
        browser.end();
  }
};

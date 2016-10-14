module.exports = {
'disabled' : true,
'@tags' : ['filterspanel', 'undock'],
   'Step 1: page load' : function (browser) {
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

    'Step 2: open filters panel and consol log the x/y coordinates' : function (browser) {
      page = browser.page.openfilterspanel();
        page.openfilterspanel();

      browser.getLocation(".panel-body.dormant", function (location) {
          console.log(location.value.x, location.value.y);
         });
  }, 
    
    'Step 3: open filters panel and consol log the x/y coordinates' : function (browser) {
      page = browser.page.undockpanel();
        page.undockpanel();

      browser.getLocation(".panel-body.dormant", function (location) {
          console.log(location.value.x, location.value.y);
         });
        browser.end();
  }
};

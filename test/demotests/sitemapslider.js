module.exports = {
  'slider test' : function (browser) {
   var page = browser.page.pageload();

    page.navigate()
      page.pageload();
   
    page = browser.page.opensitemap();
      page.opensitemap(); 
      
      browser.moveToElement('[id="slider1"]', 80, 4)
        .mouseButtonDown(0)
        .pause(300)
        .moveToElement('[id="slider1"]', 15, 4)
        .mouseButtonUp(0)
        .pause(1000)
        .end();
  },
};

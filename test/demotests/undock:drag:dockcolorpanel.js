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

      browser.mouseButtonDown('.overlay-label.drag-handle')
        .moveToElement('.overlays-wrapper', 150, 345)
        .moveToElement('.overlays-wrapper', 350, 345)
        .moveToElement('.overlays-wrapper', 800, 5)
        .mouseButtonUp(0)

      page = browser.page.closepanel();  
        page.closepanel();

      page = browser.page.opencolorpanel();
        page.opencolorpanel();

      browser.verify.elementPresent('.panel.direction-left.direction-down.react-draggable')
      //browser.getLocation(".panel-body.dormant", function (location) {
          //console.log(location.x);
          //console.log(location.y);
         //});
        browser.end();
  }
};

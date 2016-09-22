module.exports = {
'@tags' : ['filterspanel', 'undock', 'dock'],
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
      
    'Step 2: Undock show/hide panel' : function (browser) {
      page = browser.page.openshowhidepanel();
        page.openshowhidepanel();
      
      page = browser.page.undockpanel();
        page.undockpanel();
  },

    'Step 3: drag show/hide panel around screen and console log x/y values' : function (browser) {
      browser.mouseButtonDown('.overlay-label.drag-handle')
        .moveToElement('.overlays-wrapper', 150, 345)
        .getLocation(".panel-body.dormant", function (location) {
          console.log(location.value.x, location.value.y);
         })
        .moveToElement('.overlays-wrapper', 350, 345)
        .getLocation(".panel-body.dormant", function (location) {
          console.log(location.value.x, location.value.y);
         })
        .moveToElement('.overlays-wrapper', 800, 5)
        .getLocation(".panel-body.dormant", function (location) {
          console.log(location.value.x, location.value.y);
         })
        .mouseButtonUp(0)

      page = browser.page.closepanel();  
        page.closepanel();
},

    'Step 4: dock filters panel' : function (browser) {
      page = browser.page.openshowhidepanel();
        page.openshowhidepanel();

      browser.verify.elementPresent('.panel.direction-left.direction-down.react-draggable')
  
        browser.end();
  }
};

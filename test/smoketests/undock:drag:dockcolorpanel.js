module.exports = {
'@tags' : ['colorpanel', 'undock', 'dock'],
   'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

      page.navigate()
        page.pageload();
   
      page = browser.page.opensitemap();
        page.opensitemap(); 

      page = browser.page.opensite();
        page.opensite(); 
  },
      
    'Step 2: Undock color panel' : function (browser) {
      page = browser.page.opencolorpanel();
        page.opencolorpanel();
      
      page = browser.page.undockpanel();
        page.undockpanel();
  },

    'Step 3: drag color panel around screen' : function (browser) {
      browser.mouseButtonDown('.overlay-label.drag-handle')
        .moveToElement('.overlays-wrapper', 150, 345)
        .moveToElement('.overlays-wrapper', 350, 345)
        .moveToElement('.overlays-wrapper', 800, 5)
        .mouseButtonUp(0)

      page = browser.page.closepanel();  
        page.closepanel();
},

    'Step 4: dock color panel' : function (browser) {
      page = browser.page.opencolorpanel();
        page.opencolorpanel();

      browser.verify.elementPresent('.panel.direction-left.direction-down.react-draggable')
  
        browser.end();
  }
};

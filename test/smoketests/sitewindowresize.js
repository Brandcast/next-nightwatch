module.exports = {
  'Step 1: page load' : function (browser) {
   var page = browser.page.pageload();

      page.navigate()
        page.pageload();
  },
  
  'Step two: open color panel and resize browser window' : function (browser) {
     page = browser.page.opencolorpanel();
        page.opencolorpanel()

      browser.resizeWindow(640,960)
        .pause(500)

      browser.maximizeWindow()
        .pause(500)
        .end();
     
  }
};
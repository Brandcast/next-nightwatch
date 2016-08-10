module.exports = {
  '@tags' : ['brandlist', 'windowresize'],
  'brandlist window resize' : function (browser) {
     var page = browser.page.pageload();

      page.navigate()
        page.pageload();

   
    page = browser.page.opencolorpanel();
      page.opencolorpanel()

      browser.resizeWindow(640,960)
      .pause(500)

      .maximizeWindow()
      .pause(500)
      
      browser.end();
  },
};
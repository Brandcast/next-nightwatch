module.exports = {
  '@disabled': true,
  '@tags' : ['brandlist', 'windowresize'],
  'brandlist window resize w/color panel' : function (browser) {
     var page = browser.page.pageload();

      page.navigate()
        page.pageload();

      page = browser.page.openwebsitebtn();
        page.openwebsitebtn();

      page = browser.page.opensitemap();
        page.opensitemap();
      
      page = browser.page.opencolorpanel();
        page.opencolorpanel()

      browser.resizeWindow(640,960)
        .pause(500)
        .maximizeWindow()
        .pause(500)
      
      browser.end();
  },
};
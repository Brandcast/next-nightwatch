module.exports = {
  'Disabled' : true,
  'Step 1: page load' : function (browser) {
   var page = browser.page.pageload()

      page.navigate()
       page.pageload()

      page = browser.page.openwebsitebtn();
        page.openwebsitebtn();
   
      page = browser.page.opensitemap();
        page.opensitemap(); 
  },
  
    'Step two: open gloablstyles panel and resize browser window' : function (browser) {
       page = browser.page.globalstylespanel();
         page.openglobalstylespanel()

        browser.resizeWindow(640,960)
          .pause(500)
          .verify.elementPresent('.global-styles-container')

        browser.maximizeWindow()
          .pause(500)
          .verify.elementPresent('.global-styles-container')

        page = browser.page.closepanel();  
          page.closepanel();
         
         browser.end();
  }
};
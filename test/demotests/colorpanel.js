module.exports = {
  'test' : function (browser) {
     var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.opencolorpanel();
      page.opencolorpanel()

     page = browser.page.closepanel();  
        page.closepanel();
      
      browser.end();
  },
};
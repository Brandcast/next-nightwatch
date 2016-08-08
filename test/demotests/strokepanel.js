module.exports = {
  '@tags' : ['strokepanel'],
  'open stroke panel' : function (browser) {
    var page = browser.page.pageload();
      page.navigate()
        page.pageload();
      
      page = browser.page.openstrokepanel();
        page.openstrokepanel();
      
      page = browser.page.closepanel();  
        page.closepanel();

      browser.end();
    }
};
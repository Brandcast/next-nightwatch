module.exports = {
  'close site tab' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();
    
    page = browser.page.opensite();
      page.opensite();
    
    page = browser.page.closetab();
      page.closetab();
      
      browser.end();
  },
};
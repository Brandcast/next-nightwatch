module.exports = {
  'close site tab' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    },
  'open site map and close tab' : function (browser) {
    //var page = browser.page.opensitemap();
      //page.opensitemap();  
    
    //page = browser.page.opensite();
      //page.opensite();
    
    page = browser.page.closetab();
      page.closetab();
      
      browser.end();
  },
};
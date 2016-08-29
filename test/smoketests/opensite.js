module.exports = {
  //'@disabled': true,
  'test' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.opensitemap();
      page.opensitemap(); 
  
    page = browser.page.opensite();
    	page.opensite();

      browser.end()
  },
};


module.exports = {
  'step 1: page load' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();
    
    page = browser.page.opensitemap();
      page.opensitemap();

    page = browser.page.opensite();
      page.opensite();
},
  'step 2: verify iframe is present' : function (browser) {
    page = browser.page.iframepresent();
      page.iframepresent();
      
    browser.end();
  }
};
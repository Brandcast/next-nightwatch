module.exports = {
  'step 1: load page' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.openwebsitebtn();
      page.openwebsitebtn();

    },
  'step 2: close tab' : function (browser) {
    var page = browser.page.opensitemap();
      page.opensitemap();  
    
    page = browser.page.opensite();
      page.opensite();
    
    page = browser.page.closetab();
      page.closetab();
      
      browser.end();
  },
};
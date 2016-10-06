module.exports = {
  //'@disabled': true,
  'step 1: load page' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

      page = browser.page.openwebsitebtn();
        page.openwebsitebtn();
  },
    
    'step 2: open site map' : function (browser) {
      page = browser.page.opensitemap();
        page.opensitemap(); 
  
      page = browser.page.opensite();
       page.opensite();
  
     browser.end()
  },
};


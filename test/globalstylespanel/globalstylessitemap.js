module.exports = {
  '@tags' : ['sitemap', 'globalstyles'],
  'step 1: load page' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.openwebsitebtn();
      page.openwebsitebtn();
  },
  
  'step 2: open site map' : function (browser) {
    var page = browser.page.opensitemap();
      page.opensitemap(); 
  },

  'step 3: open gloabl styles menu' : function (browser) {
    page = browser.page.globalstylesbtn();
      page.globalstylesbtn(); 

    page = browser.page.closepanel();  
        page.closepanel();

      browser.end()
  },
};


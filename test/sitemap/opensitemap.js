module.exports = {
  '@tags' : ['sitemap'],
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
      
      browser.end()
  },
};


module.exports = {
  '@tags' : ['sitemap', 'media library'],
  'step 1: load page' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.openwebsitebtn();
      page.openwebsitebtn();
  },
  
  'step 2: open site map and site editor' : function (browser) {
    var page = browser.page.opensitemap();
      page.opensitemap(); 

      page = browser.page.opensite();
        page.opensite();
  },

  'step 3: open media library menu' : function (browser) {
    var page = browser.page.medialibrarybtn();
      page.openmedialibrary();

      browser.end()
  },
};


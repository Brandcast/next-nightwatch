module.exports = {
  '@tags' : ['sitemap', 'medialibrary'],
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

  'step 3: open media library menu' : function (browser) {
     var page = browser.page.medialibrarybtn();
      page.openmedialibrary(); 
  },

  'step 4: close media library menu' : function (browser) {
     var page = browser.page.medialibrarybtn();
      page.closemedialibrary(); 

      //browser.end()
  },
};


module.exports = {
  '@tags' : ['sitemap'],
  'step 1: load page' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.openwebsitebtn();
      page.openwebsitebtn();
  },
  
  'step 2: open site map, site editor and global styles menu' : function (browser) {
    var page = browser.page.opensitemap();
      page.opensitemap(); 

      page = browser.page.opensite();
        page.opensite();

      page = browser.page.globalstylesbtn();
        page.globalstylesbtn();
  },

  'step 4: open device mode drop down menu' : function (browser) {
     var page = browser.page.devicemodeglobalstyles();
      page.devicemodeglobalstyles(); 

      browser.end()
  },
};


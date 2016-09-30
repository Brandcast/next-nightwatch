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

    page = browser.page.opensite();
      page.opensite(); 
  },

  'step 3: open transform panel' : function (browser) {
     var page = browser.page.opentextformattingpanel();
      page.opentextformattingpanel(); 

      //browser.end()
  },
};


module.exports = {
  'Step 1: page load' : function (browser) {
   var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.openwebsitebtn();
      page.openwebsitebtn();

    page = browser.page.opensitemap();
      page.opensitemap(); 
    },

    'Step 2: "site map" word search on span' : function (browser) {  
      browser.assert.containsText('.tab-text', 'Demo')
      browser.end();
    },
};
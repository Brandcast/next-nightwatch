module.exports = {
  'site map work search on span' : function (browser) {
   var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.opensitemap();
      page.opensitemap(); 

    page = browser.page.opensite();
      page.opensite(); 
      
      browser.assert.containsText('span', 'SiteMap')
      browser.end();
    },
};
module.exports = {
  'site map work search on span' : function (browser) {
   var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.opensitemap();
      page.opensitemap(); 
      
      browser.assert.containsText('span', 'SiteMap')
      browser.end();
    },
};
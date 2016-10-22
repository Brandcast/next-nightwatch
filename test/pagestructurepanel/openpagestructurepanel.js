module.exports = {
  '@tags' : ['positionpanel'],
  'Step 1: page load' : function (browser) {
    var page = browser.page.pageload();
      page.navigate()
        page.pageload();
      
      page = browser.page.openwebsitebtn();
        page.openwebsitebtn();
  },
  
  'Step 2: open site map' : function (browser) {
    var page = browser.page.opensitemap();
      page.opensitemap(); 

    page = browser.page.opensite();
      page.opensite(); 
  },

   'Step 3: open stroke panel' : function (browser) {   
      page = browser.page.pagestructurepanel();
        page.openpagestructurepanel();
      
      page = browser.page.closepanel();  
        page.closepanel();

      browser.end();
    }
};
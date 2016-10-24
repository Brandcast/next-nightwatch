module.exports = {
  '@tags' : ['strokepanel'],
  'Step 1: page load' : function (browser) {
    var page = browser.page.pageload();
      page.navigate()
        page.pageload();

      page = browser.page.openwebsitebtn();
        page.openwebsitebtn();
    
      page = browser.page.opensitemap();
        page.opensitemap();

      page = browser.page.opensite();
        page.opensite(); 
   },

   'Step 2: open stroke panel' : function (browser) {   
      page = browser.page.openstrokepanel();
        page.openstrokepanel();
      
      page = browser.page.closepanel();  
        page.closepanel();

      browser.end();
    }
};
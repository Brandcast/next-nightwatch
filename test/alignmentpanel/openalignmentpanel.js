module.exports = {
  '@tags' : ['alignment'],
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

  'step 3: open alignment panel' : function (browser) {
     var page = browser.page.alignmentpanel();
      page.openalignmentpanel(); 

      browser.end()
  },
};


module.exports = {
  '@tags' : ['newwebsite'],
  'step 1: load page' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

  },
    'step 2: open "new website" panel' : function (browser) {
     page = browser.page.newwebsite();
        page.newwebsitebtn(); 
  },

    'step 3: close "new website" panel' : function (browser) {
     page = browser.page.newwebsite();
        page.closebtn(); 

      browser.end()
  },
};


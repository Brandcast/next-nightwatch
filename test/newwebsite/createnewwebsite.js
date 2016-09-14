module.exports = {
  '@tags' : ['newwebsite'],
  'step 1: load page' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    },
  'step 2: select "new website" button' : function (browser) {
     browser.pause(500)

    var page = browser.page.newwebsitebtn();
      page.newwebsitebtn(); 

      //browser.end()
  },
};


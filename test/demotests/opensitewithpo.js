module.exports = {
  'step one' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.opensite();
    page.opensite();
      
    browser.end();
  },
};


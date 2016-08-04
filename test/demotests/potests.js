module.exports = {
  'step one' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      .pageload();
      
    browser.end();
  },
};


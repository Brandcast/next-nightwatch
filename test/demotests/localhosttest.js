module.exports = {
  'step one: page load' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      .waitForElementVisible('@pageload', 1000)
      
    browser.end();
  },
};

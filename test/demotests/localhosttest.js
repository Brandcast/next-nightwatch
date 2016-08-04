module.exports = {
  'step one' : function (browser) {
    var page = browser.page.localhosttest();

    page.navigate()
      .waitForElementVisible('@sitelist', 1000)
      
    browser.end();
  },
};

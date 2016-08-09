module.exports = {
  'test' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

      browser.verify.elementPresent('.tab.selected')
      browser.verify.elementPresent('.tab')
      
      browser.end()

  },
};

//.verify.elementPresent('h5[title="About Us (page2)"]', 1, 1')
      //.moveToElement('h5[title="About Us (page2)"]', 1, 1)
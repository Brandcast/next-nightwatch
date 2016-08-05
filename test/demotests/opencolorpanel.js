module.exports = {
  'test' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .verify.elementPresent('h5')
      .moveToElement('h5', 1, 1)
      .doubleClick()

      page = browser.page.opencolorpanel();
      page.opencolorpanel()
      
      browser.end();
  },
};
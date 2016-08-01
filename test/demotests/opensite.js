module.exports = {
  'test' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .verify.elementPresent('h5')
      .moveToElement('h5', 1, 1)
      .doubleClick()
      .end()

  },
};

//.verify.elementPresent('h5[title="About Us (page2)"]', 1, 1')
      //.moveToElement('h5[title="About Us (page2)"]', 1, 1)
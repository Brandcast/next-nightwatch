module.exports = {
  'input test' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .moveToElement('.react-numeric-input', 1, 1)
      .setValue('input[type=text]', '\u0008')
      .verify.valueContains('input[type=text]', '100')
      .end();
  },
};

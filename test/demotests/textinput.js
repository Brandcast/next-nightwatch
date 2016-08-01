module.exports = {
  'input test' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', '250')
      .verify.valueContains('input[type=text]', '400')
      .end();

  },
};

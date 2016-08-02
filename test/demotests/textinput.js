module.exports = {
  'input test' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', '250')
      .verify.valueContains('input[type=text]', '400')
      //.pause(300)
      .setValue('input[type=text]', '\u0008')
      .verify.valueContains('input[type=text]', '100')
      //.pause(1000)
      .end();

  },
};

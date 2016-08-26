module.exports = {
  '@disabled': true,
  'input test' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();
      
      browser.setValue('input[type=text]', '250')
        .verify.valueContains('input[type=text]', '400')
        .setValue('input[type=text]', '\u0008')
        .verify.valueContains('input[type=text]', '100')
        .end();

  },
};

module.exports = {
  'step one' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('brand', 1000)
      .end();
  },
};

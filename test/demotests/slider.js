module.exports = {
  'input test' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .moveToElement('.vert-align-middle', 1, 1)
      .mouseButtonDown('.vert-align-middle')
      .moveToElement('.vert-align-middle',60 , 1) // Move to offset position of 200(x) 600(y)
      //.mouseButtonUp(0)

      //.setValue('input[type=text]', '\u0008')
      //.verify.valueContains('input[type=text]', '100')
      .end();
  },
};

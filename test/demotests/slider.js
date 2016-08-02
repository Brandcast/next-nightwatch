module.exports = {
  'slider test' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .moveToElement('[id="slider1"]', 80, 4)
      .mouseButtonDown(0)
      .pause(300)
      .moveToElement('[id="slider1"]', 15, 4)
      .mouseButtonUp(0)
      .end();
  },
};

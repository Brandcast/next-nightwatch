module.exports = {
  'close site tab' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .verify.elementPresent('h5')
      .moveToElement('h5', 1, 1)
      .doubleClick()
      .waitForElementVisible('.tab.selected', 1000)
      .click('.tab.selected .tab-close-container')
      .assert.elementNotPresent('iframe')
      .end();
  },
  
  //'step two' : function (browser) {
    //browser
     // .click('button[name=btnG]')
      //.pause(1000)
      //.assert.containsText('#main', 'Night Watch')
     //.end(); 
  //}
};
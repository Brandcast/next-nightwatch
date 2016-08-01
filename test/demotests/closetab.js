module.exports = {
  'test' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      //.moveToElement('.page-item-container', 1, 1)
      //.doubleClick()
      .moveToElement('.tab-close-container', 1, 1)
      .click('.tab-close-container')
  },
  
  //'step two' : function (browser) {
    //browser
     // .click('button[name=btnG]')
      //.pause(1000)
      //.assert.containsText('#main', 'Night Watch')
     //.end(); 
  //}
};
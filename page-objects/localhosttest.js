module.exports = {
  'step one' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .end();
      //.setValue('input[type=text]', 'nightwatch')
      // .findElement ('.map-item-container', 1000)
  },
  
  //'step two' : function (browser) {
    //browser
     // .click('button[name=btnG]')
      //.pause(1000)
      //.assert.containsText('#main', 'Night Watch')
     //.end(); 
  //}
};

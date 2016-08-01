module.exports = {
  'test' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .assert.containsText('span', 'SiteMap')
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
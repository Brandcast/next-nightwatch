module.exports = {
  '@tags' : ['brandlist', 'windowresize'],
  'brandlist window resize' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)

      .assert.elementPresent('div.btn[title="Color"]')
      .click('div.btn[title="Color"]')
      .pause(500)

      .resizeWindow(640,960)
      .pause(500)

      .maximizeWindow()
      .pause(500)
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
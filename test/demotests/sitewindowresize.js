module.exports = {
  'site resizeWindow' : function (browser) {
   var page = browser.page.pageload();

      page.navigate()
        page.pageload();

      page = browser.page.opencolorpanel();
        page.opencolorpanel()

      browser.resizeWindow(640,960)
        .pause(500)

      browser.maximizeWindow()
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
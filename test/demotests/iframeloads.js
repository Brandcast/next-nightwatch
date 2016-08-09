module.exports = {
  'test' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();
    
    page = browser.page.opensite();
      page.opensite();

    page = browser.page.iframepresent();
      page.iframepresent();
      
      browser.end();
  },
  
  //'step two' : function (browser) {
    //browser
     // .click('button[name=btnG]')
      //.pause(1000)
      //.assert.containsText('#main', 'Night Watch')
     //.end(); 
  //}
};
module.exports = {
  '@tags' : ['strokepanel'],
  'open stroke panel' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();
    
    page = browser.page.opensitemap();
      page.opensitemap();

    page = browser.page.opensite();
      page.opensite(); 

      //selects column
     browser.frame(0) //selects iframe - must call to select anything within iframe
      .waitForElementVisible('.bc-text', 1000)
      .click('.bc-text')
      .frame(null) //closes iframe

      //selects stroke
      
      page = browser.page.openstrokepanel();
        page.openstrokepanel()

      browser.verify.elementPresent('[id="border-all_2"]')
      .click('[id="border-all_2"]')
      
      //close stroke panel
      .click('.svg-container')
      .verify.elementNotPresent('.panel-body')

      .frame(0) //selects iframe - must call to select anything within iframe
      .assert.cssProperty('.bc-text', 'border-width', '1px')
      .frame(null)
      browser.end();
    }
};

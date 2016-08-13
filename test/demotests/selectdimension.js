module.exports = {
  '@tags' : ['dimensionspanel'],
  'open dimensions panel and set max width' : function (browser) {
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

      //selects dimension
      
    page = browser.page.opendimensionspanel();
      page.opendimensionspanel()

      browser.verify.elementPresent('.ui-wrapper[title="Max Width"]')
        .setValue('input[type=text]', '500')
        .verify.valueContains('input[type=text]', '500')
      
      //close dimension panel
      .click('.svg-container')
      .verify.elementNotPresent('.panel-body')

      //verify dimension on container via ccs
      .frame(0) //selects iframe - must call to select anything within iframe
      .assert.cssProperty('.bc-text', 'max-width', '500px')
      .frame(null)
      browser.end();
    }
};
//.waitForElementVisible('[data-id="44856863-ffe6-44d4-8787-e0dad3c93ecf"]', 1000)
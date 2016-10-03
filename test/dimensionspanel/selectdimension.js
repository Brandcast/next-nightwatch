module.exports = {
  '@tags' : ['dimensionspanel', 'maxwdith'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

      page.navigate()
       page.pageload();

      page = browser.page.openwebsitebtn();
        page.openwebsitebtn();
    
      page = browser.page.opensitemap();
        page.opensitemap();

      page = browser.page.opensite();
        page.opensite(); 
  },
    
    'Step 2: open dimensions panel and select max width from drop down menu' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('.bc-text', 1000)
        .click('.bc-text')
        .frame(null) //closes iframe
      
      page = browser.page.opendimensionspanel();
        page.opendimensionspanel()

      browser.verify.elementPresent('.ui-wrapper[title="Max Width"]')
          .setValue('input[type=text]', '500')
          .verify.valueContains('input[type=text]', '500')

      page = browser.page.closepanel();  
        page.closepanel();
    },
      
      'Step 3: verify max width is applied' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .assert.cssProperty('.focused.component-wrapper', 'max-width', '500px')
        browser.frame(null)
        browser.end();
    }
};

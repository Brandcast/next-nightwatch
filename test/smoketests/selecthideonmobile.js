module.exports = {
  '@disabled': true,
  '@tags' : ['showhidepanel', 'hidden'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();
    
        page = browser.page.opensitemap();
          page.opensitemap();

        page = browser.page.opensite();
          page.opensite();
    },

    'Step 2: select hide on mobile' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .waitForElementVisible('.bc-text', 1000)
         .click('.bc-text')
         .frame(null) //closes iframe

       page = browser.page.openshowhidepanel();
         page.openshowhidepanel();

        page = browser.page.mobilebtn();  
          page.mobilebtn();
    },
       
      'Step 3: verify text component is hidden on mobile' : function (browser) { 
       browser.frame(0) //selects iframe - must call to select anything within iframe
       browser.assert.elementPresent('.bc-text.bc-mobile-hidden')
         browser.frame(null)

       page = browser.page.closepanel();  
         page.closepanel();

          browser.end();
    }
};
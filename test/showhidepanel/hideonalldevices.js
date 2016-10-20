module.exports = {
  '@tags' : ['showhidepanel', 'hidden'],
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

    'Step 2: select hide on all devices' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
          .click('[data-qa-id="/grid/column/text"]')
         .frame(null) //closes iframe

       page = browser.page.openshowhidepanel();
         page.openshowhidepanel();

        page = browser.page.desktopbtn();  
          page.hidedesktopbtn();

        page = browser.page.tabletlandscapebtn();  
          page.hidetabletlandscapebtn();

        page = browser.page.tabletportraitbtn();  
          page.hidetabletportraitbtn();

        page = browser.page.mobilebtn();  
          page.hidemobilebtn();
    },
       
      'Step 3: verify text component is hidden on mobile' : function (browser) { 
       browser.frame(0) //selects iframe - must call to select anything within iframe
       browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
         browser.frame(null)

       page = browser.page.closepanel();  
         page.closepanel();

          browser.end();
    }
};
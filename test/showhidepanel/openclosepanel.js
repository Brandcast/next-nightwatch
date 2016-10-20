module.exports = {
  '@tags' : ['showhidepanel', 'hidden', 'mobile', 'tablet', 'desktop'],
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

    'Step 2: open show/hide panel and select hide on all devices' : function (browser) {
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

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
        browser.frame(null)
    },
       
      'Step 3: close panel via x button and reopen panel' : function (browser) { 
        page = browser.page.closepanel();  
         page.closepanel();

        page = browser.page.openshowhidepanel();
         page.openshowhidepanel();

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
        browser.frame(null)
    },

      'Step 4: deselect hide on all devices' : function (browser) { 
        page = browser.page.desktopbtn();  
          page.showdesktopbtn();

        page = browser.page.tabletlandscapebtn();  
          page.showtabletlandscapebtn();

        page = browser.page.tabletportraitbtn();  
          page.showtabletportraitbtn();

        page = browser.page.mobilebtn();  
          page.showmobilebtn();

         browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.component-wrapper.bc-text-wrapper')
        browser.frame(null)
    },
      'Step 5: close panel via panel button and reopen panel' : function (browser) { 
        browser.click('.ui-wrapper[title="Show/Hide On Device"]')
        .verify.elementNotPresent('.panel-body')

        page = browser.page.openshowhidepanel();
         page.openshowhidepanel();
  
          browser.end();
    }
};
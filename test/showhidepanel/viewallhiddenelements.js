module.exports = {
  '@tags' : ['showhidepanel', 'show', 'mobile', 'tablet', 'desktop'],
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
         .waitForElementVisible('.bc-text', 1000)
         .click('.bc-text')
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
       
      'Step 3: verify text component is hidden on all devices' : function (browser) { 
       browser.frame(0) //selects iframe - must call to select anything within iframe
        browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
       browser.frame(null)
    },
      
      'Step 4: verify "view all elements" button is selected' : function (browser) { 
        page = browser.page.viewallhiddenelementsbtn();
          page.viewallhiddenelementsbtn();
    },

      'Step 5: resize browser to mobile, portrait, landscape and desktop, then verify display does not equal none' : function (browser) { 
        browser.resizeWindow(540,930)

        browser.frame(0) //selects iframe - must call to select anything within iframe
           browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
           browser.expect.element('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)
        
        browser.resizeWindow(800,815)

        browser.frame(0) //selects iframe - must call to select anything within iframe
           browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
           browser.expect.element('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)

        browser.resizeWindow(1020,750)

        browser.frame(0) //selects iframe - must call to select anything within iframe
           browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
           browser.expect.element('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)

         browser.resizeWindow(1280,1024)

        browser.frame(0) //selects iframe - must call to select anything within iframe
           browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
           browser.expect.element('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)

       page = browser.page.closepanel();  
         page.closepanel();

          browser.end();
    }
};
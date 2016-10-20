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

      'Step 2: select "view all hidden elments" button' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
          .click('[data-qa-id="/grid/column/text"]')
        browser.frame(null) //closes iframe

        page = browser.page.openshowhidepanel();
          page.openshowhidepanel();

        page = browser.page.viewallhiddenelementsbtn();
          page.viewallhiddenelementsbtn();
    },
      
      'Step 3: select "hide" on all devices, resize browser window, then verify display does not equal none and class is hidden' : function (browser) { 
        page = browser.page.desktopbtn();  
          page.hidedesktopbtn();

         browser.resizeWindow(1280,1024)

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.bc-desktop-hidden.component-wrapper.bc-text-wrapper')
          browser.expect.element('.focused.bc-desktop-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)

        page = browser.page.tabletlandscapebtn();  
          page.hidetabletlandscapebtn();

         browser.resizeWindow(1020,750)

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.component-wrapper.bc-text-wrapper')
          browser.expect.element('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)

        page = browser.page.tabletportraitbtn();  
          page.hidetabletportraitbtn();

          browser.resizeWindow(800,815)
        
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.component-wrapper.bc-text-wrapper')
           browser.expect.element('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)

        page = browser.page.mobilebtn();  
          page.hidemobilebtn();

          browser.resizeWindow(540,930)

        browser.frame(0) //selects iframe - must call to select anything within iframe
           browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
           browser.expect.element('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)
    },
      
      'Step 4: verify "view all hidden elements" button is deselected' : function (browser) {
        page = browser.page.hideallhiddenelementsbtn();
          page.hideallhiddenelementsbtn();
    },

      'Step 5: resize browser window, then verify display equals none and class is hidden' : function (browser) {
         browser.resizeWindow(540,930)

        browser.frame(0) //selects iframe - must call to select anything within iframe
           browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
           browser.expect.element('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.equals('none')
        browser.frame(null)
        
        browser.resizeWindow(800,815)

        browser.frame(0) //selects iframe - must call to select anything within iframe
           browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
           browser.expect.element('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.equals('none')
        browser.frame(null)

        browser.resizeWindow(1020,750)

        browser.frame(0) //selects iframe - must call to select anything within iframe
           browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
           browser.expect.element('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.equals('none')
        browser.frame(null)

         browser.resizeWindow(1280,1024)

        browser.frame(0) //selects iframe - must call to select anything within iframe
           browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
           browser.expect.element('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.equals('none')
        browser.frame(null)
    
        page = browser.page.closepanel();  
          page.closepanel();

          browser.end();
    }
};
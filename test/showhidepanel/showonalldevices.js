module.exports = {
  '@tags' : ['showhidepanel', 'show'],
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
       
      'Step 3: verify text component is hidden on all devices' : function (browser) { 
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
        browser.frame(null)
    },

      'Step 4: select show on all devices' : function (browser) {
          page = browser.page.desktopbtn();  
            page.showdesktopbtn();

          page = browser.page.tabletlandscapebtn();  
            page.showtabletlandscapebtn();

          page = browser.page.tabletportraitbtn();  
            page.showtabletportraitbtn();

          page = browser.page.mobilebtn();  
            page.showmobilebtn();
    },

      'Step 5: verify hidden not applied to text component' : function (browser) { 
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementNotPresent('.focused.bc-desktop-hidden.bc-tablet-landscape-hidden.bc-tablet-hidden.bc-mobile-hidden.component-wrapper.bc-text-wrapper')
          browser.assert.elementPresent('.focused.component-wrapper.bc-text-wrapper')
        browser.frame(null)
    },

      'Step 6: resize browser widnoow to mobile, tablet, and desktop and verify dispaly:none is not applied' : function (browser) { 
        browser.resizeWindow(540,930)
       
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.expect.element('.focused.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)

        browser.resizeWindow(800,815)
        
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.component-wrapper.bc-text-wrapper')
          browser.expect.element('.focused.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)

        browser.resizeWindow(1020,750)

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.component-wrapper.bc-text-wrapper')
          browser.expect.element('.focused.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)

        browser.resizeWindow(1280,1024)

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.component-wrapper.bc-text-wrapper')
          browser.expect.element('.focused.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)

         page = browser.page.closepanel();  
          page.closepanel();

          browser.end();
    }
};
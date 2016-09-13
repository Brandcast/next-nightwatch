module.exports = {
  '@tags' : ['showhidepanel', 'show'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();
    
        page = browser.page.opensitemap();
          page.opensitemap();

        page = browser.page.opensite();
          page.opensite();
    },

    'Step 2: select hide on portrait and desktop' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .waitForElementVisible('.bc-text', 1000)
         .click('.bc-text')
         .frame(null) //closes iframe

       page = browser.page.openshowhidepanel();
         page.openshowhidepanel();

        page = browser.page.desktopbtn();  
          page.desktopbtn();

        page = browser.page.tabletportraitbtn();  
          page.tabletportraitbtn();

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.bc-tablet-hidden.bc-desktop-hidden.component-wrapper.bc-text-wrapper')
        browser.frame(null)
    },
       
      'Step 3: verify hidden not selected on mobile and landscape' : function (browser) { 
        browser.verify.elementPresent('.ui-wrapper.auto-width[title="Hide On Tablet Landscape"] .btn')
        browser.verify.elementPresent('.ui-wrapper.auto-width[title="Hide On Phone"] .btn')
        
    },

      'Step 4: resize to dekstop and landscape, verify dispaly none is on desktop but not landscape' : function (browser) {
        browser.resizeWindow(1280,1024)

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.bc-tablet-hidden.bc-desktop-hidden.component-wrapper.bc-text-wrapper')
          browser.expect.element('.focused.bc-tablet-hidden.bc-desktop-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.equals('none')
        browser.frame(null)

        browser.resizeWindow(1020,750)

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.bc-tablet-hidden.bc-desktop-hidden.component-wrapper.bc-text-wrapper')
          browser.expect.element('.focused.bc-tablet-hidden.bc-desktop-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)
         
    },

      'Step 5: resize to mobile and portrait, verify dispaly none is on mobile but not portrait' : function (browser) { 
        browser.resizeWindow(800,815)
        
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.bc-tablet-hidden.bc-desktop-hidden.component-wrapper.bc-text-wrapper')
          browser.expect.element('.focused.bc-tablet-hidden.bc-desktop-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.equals('none')
        browser.frame(null)

        browser.resizeWindow(540,930)
       
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.expect.element('.focused.bc-tablet-hidden.bc-desktop-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.does.not.equal('none')
        browser.frame(null)
   
         page = browser.page.closepanel();  
          page.closepanel();

          browser.end();
    }
};
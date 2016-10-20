module.exports = {
  '@tags' : ['showhidepanel', 'hidden', 'tablet'],
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

    'Step 2: select hide on tablet portrait' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
          .click('[data-qa-id="/grid/column/text"]')
         .frame(null) //closes iframe

       page = browser.page.openshowhidepanel();
         page.openshowhidepanel();

        page = browser.page.tabletportraitbtn();  
          page.hidetabletportraitbtn();
    },
       
      'Step 3: verify text component is hidden on tablet portrait' : function (browser) { 
        browser.resizeWindow(800,815)
        
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused.bc-tablet-hidden.component-wrapper.bc-text-wrapper')
          browser.expect.element('.focused.bc-tablet-hidden.component-wrapper.bc-text-wrapper').to.have.css('display').which.equals('none')
        browser.frame(null)

        page = browser.page.closepanel();  
          page.closepanel();

          browser.end();
    }
};
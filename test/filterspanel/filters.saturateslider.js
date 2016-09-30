module.exports = {
  '@tags' : ['filterspanel', 'saturate'],
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
      
      'Step 2: open filters panel and select saturate' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();   

        browser.verify.elementPresent('[title="Saturate"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Saturate"] .select-input-container input[type="text"]')
        .waitForElementVisible('[data-qa-id="saturate-slider"]', 1000);
    }, 

      'Step 3: select saturate via slider' : function (browser) { 
        browser.moveToElement('[data-qa-id="saturate-slider"]', 2,6)
        .mouseButtonDown(0)
        .pause(300)
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .verify.cssProperty('.component-wrapper.bc-text-wrapper.focused', '-webkit-filter', 'saturate(0)')
        browser.frame(null);

        browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Saturate"] .select-input-container input[type="text"]')
        browser.moveToElement('[data-qa-id="saturate-slider"]', 15, 6)
        .mouseButtonDown(0)
        .pause(500)
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .verify.cssProperty('.component-wrapper.bc-text-wrapper.focused', '-webkit-filter', 'saturate(0.42)')
        browser.frame(null);

        // browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Saturate"] .select-input-container input[type="text"]')
        browser.moveToElement('[data-qa-id="saturate-slider"]', 50, 6)
        .mouseButtonUp(0)
        .pause(500)
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .verify.cssProperty('.component-wrapper.bc-text-wrapper.focused', '-webkit-filter', 'saturate(1.72)')
        browser.frame(null);
    },
      
      'Step 4: closepanel' : function (browser) {  
        page = browser.page.closepanel();  
          page.closepanel();
        
        browser.end();
    }
};
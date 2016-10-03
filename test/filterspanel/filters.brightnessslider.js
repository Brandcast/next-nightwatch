module.exports = {
  '@tags' : ['filterspanel', 'brightness'],
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
      
      'Step 2: open filters panel and select brightness' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();   

        browser.verify.elementPresent('[title="Brightness"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Brightness"] .select-input-container input[type="text"]')
        .waitForElementVisible('[data-qa-id="brightness-slider"]', 1000);

        //page = browser.page.selectopacity();  
          //browser.page.selectopacity();
    }, 

      'Step 3: select brightness via slider' : function (browser) { 
        browser.moveToElement('[data-qa-id="brightness-slider"]', 5,6)
        .mouseButtonDown(0)
        .pause(300)
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'brightness(0.1)')
        browser.frame(null);

        browser.moveToElement('[data-qa-id="brightness-slider"]', 15, 6)
        .pause(300)
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'brightness(1)')
        browser.frame(null);

        browser.moveToElement('[data-qa-id="brightness-slider"]', 50, 6)
        .mouseButtonUp(0)
        .pause(300)
         browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'brightness(4.15)')
        browser.frame(null);
    },
      
      'Step 4: close panel' : function (browser) { 
         page = browser.page.closepanel();  
          page.closepanel();
      
      browser.end();
    }
};
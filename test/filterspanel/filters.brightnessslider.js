module.exports = {
//'disabled' : true,
  'disable' : true,
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
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Brightness"] .select-triangle-wrapper')
        //this.api.mouseButtonClick(0))
        .waitForElementVisible('[data-qa-id="brightness-slider"]', 1000);
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

         page = browser.page.closepanel();  
          page.closepanel();
    },
      
      'Step 4: clear filters and close panel' : function (browser) { 
        page = browser.page.openfilterspanel();
          page.openfilterspanel();

        page = browser.page.clearallfiltersbtn();
          page.clearallfiltersbtn();

        browser.pause(200)

          browser.frame(0) //selects iframe - must call to select anything within iframe
            .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'none')
          browser.frame(null)

        page = browser.page.closepanel();  
          page.closepanel();
      
      browser.pause(300)
      
      browser.end();;
    }
};
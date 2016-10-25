module.exports = {
  '@tags' : ['filterspanel', 'sepia'],
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
      
      'Step 2: open filters panel and select sepia' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
          .click('[data-qa-id="/grid/column/text"]')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();   

        browser.verify.elementPresent('[title="Sepia"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Sepia"] .select-triangle-wrapper')
        .waitForElementVisible('[data-qa-id="sepia-slider"]', 1000);
    }, 

      'Step 3: select sepia via slider and verify css has been applied' : function (browser) { 
         browser.moveToElement('[data-qa-id="sepia-slider"]', 10,4)
          .mouseButtonDown(0)
          .pause(300)
          browser.frame(0) //selects iframe - must call to select anything within iframe
            .verify.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'sepia(0.11)')
          browser.frame(null);

          //browser.mouseButtonClick('.ui-wrapper.left.auto-width.border-bottom-divide[title="Sepia"] input[type=text]')
          browser.moveToElement('[data-qa-id="sepia-slider"]', 30,4)
          .pause(500)
          browser.frame(0) //selects iframe - must call to select anything within iframe
            .verify.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'sepia(0.46)')
          browser.frame(null);

          browser.moveToElement('[data-qa-id="sepia-slider"]', 50,4)
          .mouseButtonDown(0)
          .pause(300)
          browser.frame(0) //selects iframe - must call to select anything within iframe
            .verify.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'sepia(0.82)')
          browser.frame(null);

          page = browser.page.closepanel();  
            page.closepanel();
    },
      
      'Step 4: clear filters and close panel' : function (browser) { 
        page = browser.page.openfilterspanel();
          page.openfilterspanel();

        page = browser.page.clearallfiltersbtn();
          page.clearallfiltersbtn();

        browser.pause(500)

          browser.frame(0) //selects iframe - must call to select anything within iframe
            .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'none')
          browser.frame(null)

        page = browser.page.closepanel();  
          page.closepanel();
         
        browser.pause(300)
      
      browser.end();;
    }
  };


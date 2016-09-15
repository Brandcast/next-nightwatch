module.exports = {
  '@tags' : ['filterspanel', 'clearallfilters'],
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
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();   

        browser.verify.elementPresent('[title="Sepia"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Sepia"] .select-input-container input[type="text"]')
        .verify.elementPresent('[data-qa-id="sepia-slider"]');

    }, 

      'Step 3: select sepia via slider' : function (browser) { 
        browser.moveToElement('[data-qa-id="sepia-slider"]', 50, 6)
        .mouseButtonDown(0)
        .mouseButtonUp(0) 
        .verify.valueContains('[title="Sepia"] input[type=text]', '86')

        page = browser.page.closepanel();  
          page.closepanel();
    },
      
      'Step 4: verify sepia is applied via css' : function (browser) { 
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .assert.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'sepia(0.86)')
        browser.frame(null);
    },  
      
      'Step 5: click "clear all filters" button' : function (browser) { 
         page = browser.page.openfilterspanel();
          page.openfilterspanel();

        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.clearallfiltersbtn();
          page.clearallfiltersbtn();
    },

      'Step 6: verify sepia input field is clear and css is no longer applied' : function (browser) { 
        browser.verify.valueContains('[title="Sepia"] input[type=text]', '')

        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .assert.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'none')
        browser.frame(null);
         
         page = browser.page.closepanel();  
          page.closepanel();
      browser.end();
    }
};
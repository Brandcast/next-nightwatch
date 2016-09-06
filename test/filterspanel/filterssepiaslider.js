module.exports = {
  '@tags' : ['filterspanel', 'sepia'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();

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
        .waitForElementVisible('[data-automation-id="sepia-slider"]', 1000);

        //page = browser.page.selectopacity();  
          //browser.page.selectopacity();
    }, 

      'Step 3: select sepia via slider' : function (browser) { 
        browser.moveToElement('[data-automation-id="sepia-slider"]', 2,6)
        .mouseButtonDown(0)
        browser.moveToElement('[data-automation-id="sepia-slider"]', 15, 6)
        browser.moveToElement('[data-automation-id="sepia-slider"]', 50, 6)
        .mouseButtonUp(0)
      
        page = browser.page.closepanel();  
          page.closepanel();
    },
      
      'Step 4: verify sepia is applied' : function (browser) { 
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'sepia(0.86)')
        browser.frame(null);
      browser.end();
    }
};
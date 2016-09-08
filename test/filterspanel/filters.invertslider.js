module.exports = {
  '@tags' : ['filterspanel', 'invert'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();

        page = browser.page.opensitemap();
            page.opensitemap();
    
          page = browser.page.opensite();
            page.opensite();
    },
      
      'Step 2: open filters panel and select invert' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();   

        browser.verify.elementPresent('[title="Invert"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Invert"] .select-input-container input[type="text"]')
        .waitForElementVisible('[data-qa-id="invert-slider"]', 1000);

        //page = browser.page.selectopacity();  
          //browser.page.selectopacity();
    }, 

      'Step 3: select invert via slider' : function (browser) { 
        browser.moveToElement('[data-qa-id="invert-slider"]', 2,6)
        .mouseButtonDown(0)
        browser.moveToElement('[data-qa-id="invert-slider"]', 15, 6)
        browser.moveToElement('[data-qa-id="invert-slider"]', 50, 6)
        .mouseButtonUp(0)
      
        page = browser.page.closepanel();  
          page.closepanel();
    },
      
      'Step 4: verify invert is applied' : function (browser) { 
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'invert(0.86)')
        browser.frame(null);
      browser.end();
    }
};
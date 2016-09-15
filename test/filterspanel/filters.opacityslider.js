module.exports = {
  '@tags' : ['filterspanel', 'opacity'],
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
      
      'Step 2: open filters panel and select opacity' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();   

        browser.verify.elementPresent('[title="Opacity"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Opacity"] .select-input-container input[type="text"]')
        .waitForElementVisible('[data-qa-id="opacity-slider"]', 1000);

        //page = browser.page.selectopacity();  
          //browser.page.selectopacity();
    }, 

      'Step 3: select opacity via slider' : function (browser) { 
        browser.moveToElement('[data-qa-id="opacity-slider"]', 8,6)
        .mouseButtonDown(0)
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .assert.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'opacity(0.08)')
        browser.frame(null);

        browser.moveToElement('[data-qa-id="opacity-slider"]', 15, 6)
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .assert.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'opacity(0.21)')
        browser.frame(null);

        browser.moveToElement('[data-qa-id="opacity-slider"]', 50, 6)
        .mouseButtonUp(0)
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .assert.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'opacity(0.86)')
        browser.frame(null);
    },
      
      'Step 4: close panel' : function (browser) { 
       page = browser.page.closepanel();  
          page.closepanel();
      browser.end();
    }
};
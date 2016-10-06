module.exports = {
  '@tags' : ['filterspanel', 'grayscale'],
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
      
      'Step 2: open filters panel and select grayscale' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();   

        browser.verify.elementPresent('[title="Grayscale"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Grayscale"] .select-triangle-wrapper')
        .waitForElementVisible('[data-qa-id="grayscale-slider"]', 1000);
    }, 

      'Step 3: select grayscale via slider' : function (browser) { 
        browser.moveToElement('[data-qa-id="grayscale-slider"]', 8,6)
        .mouseButtonDown(0)
        .pause(300)
         browser.frame(0) //selects iframe - must call to select anything within iframe
          .verify.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'grayscale(0.08)')
        browser.frame(null);
       
        browser.moveToElement('[data-qa-id="grayscale-slider"]', 15, 6)
        .pause(300)
         browser.frame(0) //selects iframe - must call to select anything within iframe
          .verify.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'grayscale(0.2)')
        browser.frame(null);

        browser.moveToElement('[data-qa-id="grayscale-slider"]', 50, 6)
        .pause(300)
        .mouseButtonUp(0)
         browser.frame(0) //selects iframe - must call to select anything within iframe
          .verify.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'grayscale(0.83)')
        browser.frame(null);
    },
      
      'Step 4: verify grayscale is applied' : function (browser) { 
         page = browser.page.closepanel();  
          page.closepanel();
      
      browser.end();
    }
};
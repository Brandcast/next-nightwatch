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
      
        page = browser.page.grayscaleinput();  
          page.grayscaleinput();
    },

      'Step 3: select grayscale via slider' : function (browser) { 
        browser.moveToElement('.ui-wrapper[title="Grayscale"] .slider-wrapper input[type=range]', 30, 6)
        .mouseButtonDown(0)
        browser.moveToElement('.ui-wrapper[title="Grayscale"] .slider-wrapper input[type=range]', 15, 6)
        browser.moveToElement('.ui-wrapper[title="Grayscale"] .slider-wrapper input[type=range]', 50, 6)
        .mouseButtonUp(0)
      
        page = browser.page.closepanel();  
          page.closepanel();
    },
      
      'Step 4: verify grayscale is applied' : function (browser) { 
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .assert.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'grayscale(0.86)')
        browser.frame(null);
      browser.end();
    }
};
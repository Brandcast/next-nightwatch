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
    }, 

      'Step 3: select saturate, hue rotate, and invert filters' : function (browser) { 
        browser.verify.elementPresent('[title="Saturate"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Saturate"] .select-input-container input[type="text"]')
        .waitForElementVisible('[data-qa-id="saturate-slider"]', 1000)
        .moveToElement('[data-qa-id="saturate-slider"]', 50, 6)
        .mouseButtonClick(0)
        //.mouseButtonUp(0) 
        .pause(300)
        .verify.valueContains('.ui-wrapper.left.auto-width.border-bottom-divide[title="Saturate"] input[type="text"]', '172')

        browser.verify.elementPresent('[title="Hue Rotate"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Hue Rotate"] .select-input-container .select-triangle-wrapper')
        .verify.elementPresent('[value="50deg"]')
        .keys('5')
        .verify.valueContains('[title="Hue Rotate"] input[type=text]', '50deg')

        browser.verify.elementPresent('[title="Invert"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Invert"] .select-input-container input[type="text"]')
        .waitForElementVisible('[data-qa-id="invert-slider"]', 1000);
        browser.moveToElement('[data-qa-id="invert-slider"]', 50,6)
        .mouseButtonDown(0)
        .mouseButtonUp(0)
        .verify.valueContains('[title="Invert"] input[type=text]', '86')
        .pause(300)

        page = browser.page.closepanel();  
          page.closepanel();
    },
      
      'Step 4: verify saturate, hue rotate, and invert is applied via css on the text component' : function (browser) { 
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .assert.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'saturate(1.72) hue-rotate(50deg) invert(0.86)')
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
        browser.verify.valueContains('[title="Saturate"] input[type=text]', '')
        browser.verify.valueContains('[title="Hue Rotate"] input[type=text]', '')
        browser.verify.valueContains('[title="Invert"] input[type=text]', '')

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
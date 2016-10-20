module.exports = {
// 'disabled' : true,
  '@tags' : ['filterspanel', 'input', 'blur'],
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
      
      'Step 2: open filters panel and select blur' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
          .click('[data-qa-id="/grid/column/text"]')
        browser.frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();

        browser.verify.elementPresent('.ui-wrapper[title="Blur"]')
        .click('.ui-wrapper[title="Blur"] .select-input-container')
        .waitForElementVisible('.ui-wrapper[title="Blur"] input[type=text]', 1000)
    },

      'Step 4: enter blur via keystoke' : function (browser) { 
        //browser.verify.valueContains('.ui-wrapper[title="Blur"] input[type=text]', "")
        browser.clearValue('[title="Blur"] input[type=text]')
        .keys('2')
        .keys('5')
        .keys('\uE007')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Blur"] input[type=text]', '25')


         browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(25px)')
         browser.frame(null)
        
        .click('.ui-wrapper[title="Blur"] input[type=text]')
        .clearValue('[title="Blur"] input[type=text]')
        .verify.valueContains('.ui-wrapper[title="Blur"] input[type=text]', "")
    },

    'Step 5: enter incrementally inscrease/decrease blur via up/down arrow' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Blur"] input[type=text]', "")
        .click('.ui-wrapper[title="Blur"] input[type=text]')
        .keys('2')
        .keys('5')
        //.keys('\uE007')
        .keys(browser.Keys.ARROW_UP)
        .keys(browser.Keys.ARROW_UP)
        .verify.valueContains('.ui-wrapper[title="Blur"] input[type=text]', '26px')
        //.keys('\uE007')
        .pause(300)

        browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(26px)')
        browser.frame(null)

        .click('.ui-wrapper[title="Blur"] input[type=text]')
        .keys(browser.Keys.ARROW_DOWN)
        .verify.valueContains('.ui-wrapper[title="Blur"] input[type=text]', '25.5px')
        .keys('\uE007')
        .pause(300)
        
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(25.5px)')
        browser.frame(null);
    },

    'Step 6: clear input field and close panel' : function (browser) { 
        // browser.setValue('[title="Blur"] input[type=text]', '\u0008')
        page = browser.page.clearallfiltersbtn();
          page.clearallfiltersbtn();

        browser.pause(300)

        browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'none')
        browser.frame(null);

        page = browser.page.closepanel();  
          page.closepanel();
      
        browser.pause(300)
        
      browser.end();;
    }
};
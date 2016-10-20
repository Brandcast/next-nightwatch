module.exports = {
'disabled' : true,
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

        browser.verify.elementPresent('.ui-wrapper[title="Sepia"]')
        .click('.ui-wrapper[title="Sepia"] .select-input-container')
        .waitForElementVisible('.ui-wrapper[title="Sepia"] input[type=range]', 1000)
    },

      'Step 3: enter sepia via setvalue function' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Sepia"] input[type=text]', "")
        .setValue('.ui-wrapper[title="Sepia"] input[type=text]', '25')
        .keys('\uE007')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Sepia"] input[type=text]', '25')

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'sepia(0.25)')
         browser.frame(null)

         .clearValue('.ui-wrapper[title="Sepia"] input[type=text]')
         .verify.valueContains('.ui-wrapper[title="Sepia"] input[type=text]', "")
    },

      'Step 4: enter sepia via keystoke' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Sepia"] input[type=text]', "")
        .keys('2')
        .keys('5')
        .keys('\uE007')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Sepia"] input[type=text]', '25')


         browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.component-wrapper.bc-text-wrapper.focused', '-webkit-filter', 'sepia(0.25)')
         browser.frame(null)
        
        .click('.ui-wrapper[title="Sepia"] input[type=text]')
        .keys('\u0008')
        .keys('\u0008')
        .keys('\u0008')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Sepia"] input[type=text]', "")
    },

    'Step 5: enter incrementally inscrease/decrease sepia via up/down arrow' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Sepia"] input[type=text]', "")
        .click('.ui-wrapper[title="Sepia"] input[type=text]')
        .keys('2')
        .keys('5')
        //.keys('\uE007')
        .keys(browser.Keys.ARROW_UP)
        .keys(browser.Keys.ARROW_UP)
        //.keys('\uE007')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Sepia"] input[type=text]', '27')

        browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'sepia(0.27)')
        browser.frame(null)

        .keys(browser.Keys.ARROW_DOWN)
        .keys('\uE007')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Sepia"] input[type=text]', '26')

        browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'sepia(0.26)')
        browser.frame(null)
        
        page = browser.page.closepanel();  
          page.closepanel();
      
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'sepia(0.26)')
        browser.frame(null);

    },
      
      'Step 6: clear filters and close panel' : function (browser) { 
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
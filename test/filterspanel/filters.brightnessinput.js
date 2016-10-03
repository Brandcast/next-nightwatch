module.exports = {
  '@tags' : ['filterspanel', 'brightness'],
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
      
      'Step 2: open filters panel and select brightness' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();

        browser.verify.elementPresent('.ui-wrapper[title="Brightness"]')
        .click('.ui-wrapper[title="Brightness"] .select-input-container')
        .waitForElementVisible('.ui-wrapper[title="Brightness"] input[type=text]', 1000)
      
        //page = browser.page.brightnessinput();  
          //page.brightnessinput();
    },

      'Step 3: enter brightness via setvalue function' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Brightness"] input[type=text]', "")
        .setValue('.ui-wrapper[title="Brightness"] input[type=text]', '25')
        .keys('\uE007')
        .verify.valueContains('.ui-wrapper[title="Brightness"] input[type=text]', '25')
        .pause(300)

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'brightness(0.25)')
         browser.frame(null)

         .clearValue('.ui-wrapper[title="Brightness"] input[type=text]')
         .verify.valueContains('.ui-wrapper[title="Brightness"] input[type=text]', "")
    },

      'Step 4: enter brightness via keystoke' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Brightness"] input[type=text]', "")
        .keys('2')
        .keys('5')
        .keys('\uE007')
        .verify.valueContains('.ui-wrapper[title="Brightness"] input[type=text]', '25')


         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'brightness(0.25)')
         browser.frame(null)
        
        .click('.ui-wrapper[title="Brightness"] input[type=text]')
        .keys('\u0008')
        .keys('\u0008')
        .keys('\u0008')
        .verify.valueContains('.ui-wrapper[title="Brightness"] input[type=text]', "")
    },

    'Step 5: enter incrementally inscrease/decrease brightness via up/down arrow' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Brightness"] input[type=text]', "")
        .click('.ui-wrapper[title="Brightness"] input[type=text]')
        .keys('2')
        .keys('5')
        //.keys('\uE007')
        .keys(browser.Keys.ARROW_UP)
        .keys(browser.Keys.ARROW_UP)
        .verify.valueContains('.ui-wrapper[title="Brightness"] input[type=text]', '35')
        //.keys('\uE007')
        .pause(300)

        browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'brightness(0.35)')
        browser.frame(null)

        .keys(browser.Keys.ARROW_DOWN)
        .verify.valueContains('.ui-wrapper[title="Brightness"] input[type=text]', '30')
        .keys('\uE007')

        
        page = browser.page.closepanel();  
          page.closepanel();
      
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'brightness(0.3)')
        browser.frame(null);
      
      browser.end();
    }
};
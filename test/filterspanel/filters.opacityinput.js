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

        browser.verify.elementPresent('.ui-wrapper[title="Opacity"]')
        .click('.ui-wrapper[title="Opacity"] .select-input-container')
        .waitForElementVisible('.ui-wrapper[title="Opacity"] input[type=range]', 1000)
      
        //page = browser.page.opacityinput();  
          //page.opacityinput();
    },

      'Step 3: enter opacity via setvalue function' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Opacity"] input[type=text]', "")
        .setValue('.ui-wrapper[title="Opacity"] input[type=text]', '25')
        .keys('\uE007')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Opacity"] input[type=text]', '25')

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'opacity(0.25)')
         browser.frame(null)

         .clearValue('.ui-wrapper[title="Opacity"] input[type=text]')
         .verify.valueContains('.ui-wrapper[title="Opacity"] input[type=text]', "")
    },

      'Step 4: enter opacity via keystoke' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Opacity"] input[type=text]', "")
        .keys('2')
        .keys('5')
        .keys('\uE007')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Opacity"] input[type=text]', '25')


         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'opacity(0.25)')
         browser.frame(null)
        
        .click('.ui-wrapper[title="Opacity"] input[type=text]')
        .keys('\u0008')
        .keys('\u0008')
        .keys('\u0008')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Opacity"] input[type=text]', "")
    },

    'Step 5: enter incrementally inscrease/decrease opacity via up/down arrow' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Opacity"] input[type=text]', "")
        .keys('2')
        .keys('5')
        .keys('\uE007')
        .keys(browser.Keys.ARROW_UP)
        .keys(browser.Keys.ARROW_UP)
        .keys('\uE007')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Opacity"] input[type=text]', '27')
        .keys(browser.Keys.ARROW_DOWN)
        .keys('\uE007')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Opacity"] input[type=text]', '26')

        browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'opacity(0.26)')
        browser.frame(null)
        
        page = browser.page.closepanel();  
          page.closepanel();
      
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'opacity(0.26)')
        browser.frame(null);
      
      browser.end();
    }
};
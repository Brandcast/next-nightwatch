module.exports = {
  '@tags' : ['filterspanel', 'contrast'],
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
      
      'Step 2: open filters panel and select contrast' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();

        browser.verify.elementPresent('.ui-wrapper[title="Contrast"]')
        .click('.ui-wrapper[title="Contrast"] .select-input-container')
        .waitForElementVisible('.ui-wrapper[title="Contrast"] input[type=text]', 1000)
      
        //page = browser.page.contrastinput();  
          //page.contrastinput();
    },

      'Step 3: enter contrast via setvalue function' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Contrast"] input[type=text]', "")
        .setValue('.ui-wrapper[title="Contrast"] input[type=text]', '25')
        .keys('\uE007')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Contrast"] input[type=text]', '25')

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'contrast(0.25)')
         browser.frame(null)

         .clearValue('.ui-wrapper[title="Contrast"] input[type=text]')
         .verify.valueContains('.ui-wrapper[title="Contrast"] input[type=text]', "")
    },

      'Step 4: enter contrast via keystoke' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Contrast"] input[type=text]', "")
        .keys('2')
        .keys('5')
        .keys('\uE007')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Contrast"] input[type=text]', '25')


         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'contrast(0.25)')
         browser.frame(null)
        
        .click('.ui-wrapper[title="Contrast"] input[type=text]')
        .keys('\u0008')
        .keys('\u0008')
        .keys('\u0008')
        .pause(300)
        .verify.valueContains('.ui-wrapper[title="Contrast"] input[type=text]', "")
    },

    'Step 5: enter incrementally inscrease/decrease contrast via up/down arrow' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Contrast"] input[type=text]', "")
        .click('.ui-wrapper[title="Contrast"] input[type=text]')
        .keys('2')
        .keys('5')
        //.keys('\uE007')
        .keys(browser.Keys.ARROW_UP)
        .keys(browser.Keys.ARROW_UP)
        .verify.valueContains('.ui-wrapper[title="Contrast"] input[type=text]', '35')
        //.keys('\uE007')
        .pause(300)

        browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'contrast(0.35)')
        browser.frame(null)

        .keys(browser.Keys.ARROW_DOWN)
        .verify.valueContains('.ui-wrapper[title="Contrast"] input[type=text]', '30')
        .keys('\uE007')
        .pause(300)

        
        page = browser.page.closepanel();  
          page.closepanel();
      
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'contrast(0.3)')
        browser.frame(null);
      
      browser.end();
    }
};
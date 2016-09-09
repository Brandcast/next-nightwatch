module.exports = {
  '@tags' : ['filterspanel', 'Hue Rotate'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();

        page = browser.page.opensitemap();
            page.opensitemap();
    
          page = browser.page.opensite();
            page.opensite();
    },
      
      'Step 2: open filters panel and select hue-rotate' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();

        browser.verify.elementPresent('.ui-wrapper[title="Hue Rotate"]')
        .click('.ui-wrapper[title="Hue Rotate"] .select-input-container')
        .waitForElementVisible('.ui-wrapper[title="Hue Rotate"] input[type=text]', 1000)
      
        //page = browser.page.hue-rotateinput();  
          //page.hue-rotateinput();
    },

      'Step 3: enter hue-rotate via setvalue function' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Hue Rotate"] input[type=text]', "")
        .setValue('.ui-wrapper[title="Hue Rotate"] input[type=text]', '25')
        .keys(browser.Keys.RETURN)
        .verify.valueContains('.ui-wrapper[title="Hue Rotate"] input[type=text]', '25')

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'hue-rotate(25deg)')
         browser.frame(null)

         .clearValue('.ui-wrapper[title="Hue Rotate"] input[type=text]')
         .verify.valueContains('.ui-wrapper[title="Hue Rotate"] input[type=text]', "")
    },

      'Step 4: enter hue-rotate via keystoke' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Hue Rotate"] input[type=text]', "")
        .keys('2')
        .keys('5')
        .keys(browser.Keys.RETURN)
        .verify.valueContains('.ui-wrapper[title="Hue Rotate"] input[type=text]', '25')


         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'hue-rotate(25deg)')
         browser.frame(null)
        
        .click('.ui-wrapper[title="Hue Rotate"] input[type=text]')
        .keys('\u0008')
        .keys('\u0008')
        .keys('\u0008')
        .verify.valueContains('.ui-wrapper[title="Hue Rotate"] input[type=text]', "")
    },

    'Step 5: enter incrementally inscrease/decrease hue-rotate via up/down arrow' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Hue Rotate"] input[type=text]', "")
        .keys('2')
        .keys('5')
        .keys(browser.Keys.RETURN)
        .keys(browser.Keys.ARROW_UP)
        .keys(browser.Keys.ARROW_UP)
        .verify.valueContains('.ui-wrapper[title="Hue Rotate"] input[type=text]', '27')
        .keys(browser.Keys.RETURN)

        browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'hue-rotate(27deg)')
        browser.frame(null)

        .keys(browser.Keys.ARROW_DOWN)
        .verify.valueContains('.ui-wrapper[title="Hue Rotate"] input[type=text]', '26')
        .keys(browser.Keys.RETURN)

        
        page = browser.page.closepanel();  
          page.closepanel();
      
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'hue-rotate(26deg)')
        browser.frame(null);
      browser.end();
    }
};
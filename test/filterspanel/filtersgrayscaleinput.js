module.exports = {
  '@tags' : ['filterspanel', 'grayscale'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();

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

      'Step 3: enter grayscale via setvalue function' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Grayscale"] input[type=text]', "")
        .setValue('.ui-wrapper[title="Grayscale"] input[type=text]', '25')
        .keys(browser.Keys.RETURN)
        .verify.valueContains('.ui-wrapper[title="Grayscale"] input[type=text]', '25')

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'grayscale(0.25)')
         browser.frame(null)

         .clearValue('.ui-wrapper[title="Grayscale"] input[type=text]')
         .verify.valueContains('.ui-wrapper[title="Grayscale"] input[type=text]', "")
    },

      'Step 4: enter grayscale via keystoke' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Grayscale"] input[type=text]', "")
        .keys('2')
        .keys('5')
        .keys(browser.Keys.RETURN)
        .verify.valueContains('.ui-wrapper[title="Grayscale"] input[type=text]', '25')


         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'grayscale(0.25)')
         browser.frame(null)
        
        .click('.ui-wrapper[title="Grayscale"] input[type=text]')
        .keys('\u0008')
        .keys('\u0008')
        .keys('\u0008')
        .verify.valueContains('.ui-wrapper[title="Grayscale"] input[type=text]', "")
    },

    'Step 5: enter grayscale via keystoke' : function (browser) { 
        browser.verify.valueContains('.ui-wrapper[title="Grayscale"] input[type=text]', "")
        .keys('\u2191')
        //.keys('2')
        //.keys('5')
        //.keys(browser.Keys.RETURN)
        //.verify.valueContains('.ui-wrapper[title="Grayscale"] input[type=text]', '25')


         //browser.frame(0) //selects iframe - must call to select anything within iframe
         //.assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'grayscale(0.25)')
         //browser.frame(null)
        //page = browser.page.closepanel();  
          //page.closepanel();
    //},
      
      //'Step 4: verify grayscale is applied' : function (browser) { 
        //browser.frame(0) //selects iframe - must call to select anything within iframe
         //.assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'grayscale(0.86)')
        //browser.frame(null);
      //browser.end();
    }
};
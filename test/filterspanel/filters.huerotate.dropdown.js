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
      
      'Step 2: open filters panel and select Hue Rotate' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();   
    }, 

      'Step 3: select Hue Rotate 50deg via drop-down-menu' : function (browser) { 
        browser.verify.elementPresent('[title="Hue Rotate"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Hue Rotate"] .select-input-container .select-triangle-wrapper')
        .verify.elementPresent('[value="50deg"]')
        .keys(['50', browser.Keys.ENTER])
        .verify.valueContains('[title="Hue Rotate"] input[type=text]', '50deg')


         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'hue-rotate(50deg)')
         browser.frame(null)
    },

      'Step 4: select Hue Rotate 180deg via drop-down-menu' : function (browser) { 
         browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Hue Rotate"] .select-input-container .select-triangle-wrapper')
         .verify.elementPresent('[value="180deg"]')
         .keys(['180', browser.Keys.ENTER])
         .verify.valueContains('[title="Hue Rotate"] input[type=text]', '180deg')

          browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'hue-rotate(180deg)')
          browser.frame(null)

          page = browser.page.closepanel();  
          page.closepanel();
    },

      'Step 5: select Hue Rotate 90deg via drop-down-menu' : function (browser) { 
        page = browser.page.openfilterspanel();
          page.openfilterspanel(); 

        browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Hue Rotate"] .select-input-container .select-triangle-wrapper')
         .verify.elementPresent('[value="90deg"]')
         .keys(['90', browser.Keys.ENTER])
         .verify.valueContains('[title="Hue Rotate"] input[type=text]', '90deg')

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'hue-rotate(90deg)')
         browser.frame(null)

         page = browser.page.closepanel();  
          page.closepanel();
    },

      'Step 6: select Hue Rotate 0deg via drop-down-menu' : function (browser) {
        page = browser.page.openfilterspanel();
          page.openfilterspanel();
          
         browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Hue Rotate"] .select-input-container .select-triangle-wrapper')
         .verify.elementPresent('[value="0deg"]')
         .keys(['0', browser.Keys.ENTER])
         .verify.valueContains('[title="Hue Rotate"] input[type=text]', '0deg')

          browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'hue-rotate(0deg)')
          browser.frame(null)
      
        page = browser.page.closepanel();  
          page.closepanel();
      browser.end();
    }
};
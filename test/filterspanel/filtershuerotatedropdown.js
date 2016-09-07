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

        browser.verify.elementPresent('[title="Hue Rotate"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Hue Rotate"] .select-input-container .select-triangle-wrapper')
        //.waitForElementVisible('[data-automation-id="hue-rotate-drop-down"]', 1000);

    }, 

      'Step 3: select Hue Rotate via drop-down-menu' : function (browser) { 
        browser.verify.elementPresent('[value="50deg"]')
        .keys('5')
        .verify.valueContains('[title="Hue Rotate"] input[type=text]', '50deg')


         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'hue-rotate(50deg)')
         browser.frame(null)

          //browser.frame(0) //selects iframe - must call to select anything within iframe
         //.assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'hue-rotate(180deg)')
          //browser.frame(null)

         //browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Hue Rotate"] .select-input-container .select-triangle-wrapper')
         //.verify.elementPresent('[value="180deg"]')
         //.keys('1')
         //.verify.valueContains('[title="Hue Rotate"] input[type=text]', '180deg')

         // browser.frame(0) //selects iframe - must call to select anything within iframe
         //.assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'hue-rotate(180deg)')
          //browser.frame(null)

          //browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Hue Rotate"] .select-input-container .select-triangle-wrapper')
         //.verify.elementPresent('[value="90deg"]')
         //.keys('9')
         //.verify.valueContains('[title="Hue Rotate"] input[type=text]', '90deg')
      
        page = browser.page.closepanel();  
          page.closepanel();
    //},
      
      //'Step 4: verify Hue Rotate is applied' : function (browser) { 
        //browser.frame(0) //selects iframe - must call to select anything within iframe
        // .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'Hue Rotate(0.86)')
        //browser.frame(null);
      browser.end();
    }
};
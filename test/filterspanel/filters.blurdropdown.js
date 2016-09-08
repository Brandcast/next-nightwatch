module.exports = {
  '@tags' : ['filterspanel', 'blur'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();

        page = browser.page.opensitemap();
            page.opensitemap();
    
          page = browser.page.opensite();
            page.opensite();
    },
      
      'Step 2: open filters panel and select blur' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();   

        browser.verify.elementPresent('[title="Blur"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Blur"] .select-input-container .select-triangle-wrapper')
        //.waitForElementVisible('[data-qa-id="blur-drop-down"]', 1000);

    }, 

      'Step 3: select blur 5px via drop-down-menu' : function (browser) { 
        browser.verify.elementPresent('[value="5px"]')
        .keys('5')
        .verify.valueContains('[title="Blur"] input[type=text]', '5px')

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(5px)')
         browser.frame(null)
         
         //browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Blur"] .select-input-container .select-triangle-wrapper')
         //.verify.elementPresent('[value="10px"]')
         //.keys('1')
         //.verify.valueContains('[title="Blur"] input[type=text]', '10px')

          //browser.frame(0) //selects iframe - must call to select anything within iframe
          //.waitForElementVisible('.bc-text', 1000)
          //.click('.bc-text')
         //.assert.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(10px)')
          //browser.frame(null)
      
         //browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Blur"] .select-input-container .select-triangle-wrapper')
         //.verify.elementPresent('[value="20px"]')
         //.keys(browser.Keys.RETURN)
         //.verify.valueContains('[title="Blur"] input[type=text]', '20px')

          //browser.frame(0) //selects iframe - must call to select anything within iframe
         //.assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(20px)')
          //browser.frame(null)
        //page = browser.page.closepanel();  
          //page.closepanel();
    //},
      
      //'Step 4: verify blur is applied' : function (browser) { 
        //browser.frame(0) //selects iframe - must call to select anything within iframe
        // .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(0.86)')
        //browser.frame(null);
      browser.end();
    }
};
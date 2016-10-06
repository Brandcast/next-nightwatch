module.exports = {
  '@tags' : ['filterspanel', 'blur'],
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
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();   

        browser.verify.elementPresent('[title="Blur"]')
        .click('[title="Blur"] .select-input-container .select-triangle-wrapper')
        //.waitForElementVisible('[data-qa-id="blur-drop-down"]', 1000);

    }, 

      'Step 3: select blur 5px via drop-down-menu' : function (browser) { 
        browser.verify.elementPresent('[value="5px"]')
        .keys('5')
        .pause(300)
        .verify.valueContains('[title="Blur"] input[type=text]', '5px')

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(5px)')
         browser.frame(null)
    },

      'Step 4: close panel, then reopen panel and verify selected value is applied' : function (browser) { 
        page = browser.page.closepanel();  
          page.closepanel();

        page = browser.page.openfilterspanel();
          page.openfilterspanel(); 

        browser.verify.valueContains('[title="Blur"] input[type=text]', '5px')

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(5px)')
         browser.frame(null) 
    },
      
      'Step 5: clear value via clearvalue + enter key' : function (browser) {        
        browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Blur"] .select-input-container input[type=text]')
        browser.clearValue('.ui-wrapper.left.auto-width.border-bottom-divide[title="Blur"] input[type=text]')
        browser.keys('\uE007')
        browser.verify.valueContains('.ui-wrapper.left.auto-width.border-bottom-divide[title="Blur"] input[type=text]', '')
        browser.pause(300)

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'none')
         browser.frame(null) 
   },

      'Step 6: close panel, then reopen panel and verify value remains empty' : function (browser) { 
        page = browser.page.closepanel();  
          page.closepanel();

        page = browser.page.openfilterspanel();
          page.openfilterspanel(); 

        browser.verify.valueContains('[title="Blur"] input[type=text]', '')

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'none')
         browser.frame(null) 
         
         page = browser.page.closepanel();  
          page.closepanel();
          
     browser.end();
    }
};
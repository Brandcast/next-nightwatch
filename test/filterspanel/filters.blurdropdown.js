module.exports = {
// 'disabled' : true,
  '@tags' : ['filterspanel', 'dropdown', 'blur'],
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
    },
      
      'Step 3: select blur 0px via drop-down-menu' : function (browser) { 
       browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Blur"] .select-input-container .select-triangle-wrapper')
         .verify.elementPresent('[value="0px"]')
         .keys('0')
         .verify.valueContains('[title="Blur"] input[type=text]', '0px')

        browser.frame(0) //selects iframe - must call to select anything within iframe
            .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(0px)')
        browser.frame(null)

        page = browser.page.closepanel();  
          page.closepanel();
 
    }, 

      'Step 4: select blur 5px via drop-down-menu' : function (browser) { 
        page = browser.page.openfilterspanel();
          page.openfilterspanel();

        browser.verify.elementPresent('[title="Blur"]')
        .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Blur"] .select-input-container .select-triangle-wrapper')

        browser.verify.elementPresent('[value="5px"]')
        .keys('5')
        .verify.valueContains('[title="Blur"] input[type=text]', '5px')

         browser.frame(0) //selects iframe - must call to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(5px)')
         browser.frame(null)

        page = browser.page.closepanel();  
          page.closepanel();
    },
       
      'Step 5: select blur 10px via drop-down-menu' : function (browser) { 
        page = browser.page.openfilterspanel();
          page.openfilterspanel(); 

         browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Blur"] .select-input-container .select-triangle-wrapper')
         .verify.elementPresent('[value="10px"]')
         .keys('10')
         .pause(200)
         .verify.valueContains('[title="Blur"] input[type=text]', '10px')
         
          browser.frame(0) //selects iframe - must call to select anything within iframe
            .verify.cssProperty('.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(10px)')
          browser.frame(null)

          page = browser.page.closepanel();  
          page.closepanel();
    },
      
      'Step 6: select blur 20px via drop-down-menu' : function (browser) {
        page = browser.page.openfilterspanel();
          page.openfilterspanel();

         browser.click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Blur"] .select-input-container .select-triangle-wrapper')
         .verify.elementPresent('[value="20px"]')
         .keys('20')
         .verify.valueContains('[title="Blur"] input[type=text]', '20px')
         .pause(200)

          browser.frame(0) //selects iframe - must call to select anything within iframe
            .verify.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'blur(20px)')
          browser.frame(null)

        page = browser.page.closepanel();  
          page.closepanel();
    },
      
      'Step 7: clear filters' : function (browser) { 
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


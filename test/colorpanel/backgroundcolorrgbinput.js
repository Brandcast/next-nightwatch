module.exports = {
  'disabled' : true,
  '@tags' : ['colorpanel'],
    'Step 1: page load'  : function (browser) {
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

      'Step 2: click on red input field, enter number and verify input value'  : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
          .click('[data-qa-id="/grid/column/text"]')
          .frame(null) //closes iframe

        page = browser.page.opencolorpanel();
          page.opencolorpanel();

        page = browser.page.backgroundcolorbtn();
          page.backgroundcolorbtn();

        page = browser.page.colorswatchtransparent();  
          page.colorswatchtransparent();

        // page = browser.page.colorspectrum();  
        //   page.colorspectrum();

        page = browser.page.redinput();  
          page.redinput();
            browser.clearValue('.ui-wrapper[title="Red"] input[type=text]')
            .keys('6')
            .keys('0')
            .keys(browser.Keys.RETURN)
            .verify.valueContains('.ui-wrapper[title="Red"] input[type=text]', '60')  
    },
        
      'Step 3: click on green input field, enter number and verify input value'  : function (browser) {  

         page = browser.page.greeninput();  
          page.greeninput();
            browser.clearValue('.ui-wrapper[title="Green"] input[type=text]')
            .keys('4')
            .keys('0')
            .keys(browser.Keys.RETURN)
            .verify.valueContains('.ui-wrapper[title="Green"] input[type=text]', '40')
    },

      'Step 4: click on blue input field, enter number and verify input value'  : function (browser) {  

         page = browser.page.blueinput();  
          page.blueinput();
            browser.clearValue('.ui-wrapper[title="Blue"] input[type=text]')
            .keys('2')
            .keys('0')
            .keys(browser.Keys.RETURN)
            .verify.valueContains('.ui-wrapper[title="Blue"] input[type=text]', '20')

            browser.pause(300)
    },
      
      'Step 5: verify hex code in color panel and background color css value' : function (browser) {

          browser.verify.valueContains('.color-hex-input-wrapper input[type=text]', '#3c2814')

         browser.frame(0) //selects iframe - must call to select anything within iframe
            browser.assert.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'background-color', 'rgba(60, 40, 20, 1)')
         browser.frame(null)     
    },
      
      'Step 6: clear background color and close panel' : function (browser) {
        page = browser.page.colorswatchtransparent();  
          page.colorswatchtransparent();

          browser.pause(300);

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.verify.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'background-color', 'rgba(0, 0, 0, 0)')
          browser.frame(null)

        page = browser.page.closepanel();  
          page.closepanel();
          
          browser.end();
    }
};
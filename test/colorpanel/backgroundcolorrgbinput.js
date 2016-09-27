module.exports = {
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

        page = browser.page.redinput();  
          page.redinput();
            browser.setValue('.ui-wrapper[title="Red"] input[type=text]', '\u0008')
            .keys('6')
            .keys('0')
            .keys(browser.Keys.RETURN)
            .verify.valueContains('.ui-wrapper[title="Red"] input[type=text]', '60')
           
    },
        
      'Step 3: click on green input field, enter number and verify input value'  : function (browser) {  

         page = browser.page.greeninput();  
          page.greeninput();
            browser.setValue('.ui-wrapper[title="Green"] input[type=text]', '\u0008')
            .keys('4')
            .keys('0')
            .keys(browser.Keys.RETURN)
            .verify.valueContains('.ui-wrapper[title="Green"] input[type=text]', '40')
    },

      'Step 4: click on blue input field, enter number and verify input value'  : function (browser) {  

         page = browser.page.blueinput();  
          page.blueinput();
            browser.setValue('.ui-wrapper[title="Blue"] input[type=text]', '\u0008')
            .keys('2')
            .keys('0')
            .keys(browser.Keys.RETURN)
            .verify.valueContains('.ui-wrapper[title="Blue"] input[type=text]', '20')
    },
      
      'Step 5: verify hex code in color panel and background color css value' : function (browser) {

          browser.verify.valueContains('.color-hex-input-wrapper input[type=text]', '#3c2814')

         browser.frame(0) //selects iframe - must call to select anything within iframe
            browser.assert.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'background-color', 'rgba(60, 40, 20, 1)')
         browser.frame(null)
           browser.end();
    }
};
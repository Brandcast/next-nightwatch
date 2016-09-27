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

      'Step 2: click on red slider and verify hex code'  : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
          .click('[data-qa-id="/grid/column/text"]')
          .frame(null) //closes iframe

        page = browser.page.opencolorpanel();
          page.opencolorpanel();

        page = browser.page.strokecolorbtn();
          page.strokecolorbtn();

        page = browser.page.RGBslider();  
          page.redslider();
            //browser.waitForElementVisible('.ui-wrapper.full-width[title="Red"] .slider-wrapper input[type=range]', 1000)
            browser.moveToElement('.ui-wrapper.full-width[title="Red"] .slider-wrapper input[type=range]', 60, 4)
            browser.mouseButtonClick()
            browser.verify.valueContains('.color-hex-input-wrapper input[type=text]', '#710000')
    },
        
      'Step 3: click on green slider and verify hex code'  : function (browser) {  

         //page = browser.page.RGBslider();  
          //page.greenslider();
            browser.waitForElementVisible('.ui-wrapper.full-width[title="Green"] .slider-wrapper input[type=range]', 1000)
            browser.moveToElement('.ui-wrapper.full-width[title="Green"] .slider-wrapper input[type=range]', 40, 4)
            browser.mouseButtonClick()
            browser.verify.valueContains('.color-hex-input-wrapper input[type=text]', '#714900')
    },

      'Step 4: click on blue slider and verify hex code'  : function (browser) {  

         //page = browser.page.RGBslider();  
          //page.greenslider();
            browser.waitForElementVisible('.ui-wrapper.full-width[title="Blue"] .slider-wrapper input[type=range]', 1000)
            browser.moveToElement('.ui-wrapper.full-width[title="Blue"] .slider-wrapper input[type=range]', 20, 4)
            browser.mouseButtonClick()
            browser.verify.valueContains('.color-hex-input-wrapper input[type=text]', '#714921')
        
          page = browser.page.closepanel();  
            page.closepanel();
    },
      
      'Step 5: verify stroke color is set' : function (browser) {
          //verify color applied via css
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'border-color', 'rgb(113, 72, 13)')
          browser.frame(null)
          browser.end();
    }
};
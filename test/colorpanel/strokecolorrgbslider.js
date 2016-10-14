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
            browser.verify.valueContains('.color-hex-input-wrapper input[type=text]', '#700000')
    },
        
      'Step 3: click on green slider and verify hex code'  : function (browser) {  

         //page = browser.page.RGBslider();  
          //page.greenslider();
            browser.waitForElementVisible('.ui-wrapper.full-width[title="Green"] .slider-wrapper input[type=range]', 1000)
            browser.moveToElement('.ui-wrapper.full-width[title="Green"] .slider-wrapper input[type=range]', 40, 4)
            browser.mouseButtonClick()
            browser.verify.valueContains('.color-hex-input-wrapper input[type=text]', '#704800')
    },

      'Step 4: click on blue slider and verify hex code'  : function (browser) {  

         //page = browser.page.RGBslider();  
          //page.greenslider();
            browser.waitForElementVisible('.ui-wrapper.full-width[title="Blue"] .slider-wrapper input[type=range]', 1000)
            browser.moveToElement('.ui-wrapper.full-width[title="Blue"] .slider-wrapper input[type=range]', 20, 4)
            browser.mouseButtonClick()
            browser.verify.valueContains('.color-hex-input-wrapper input[type=text]', '#704821')
            browser.pause(300)
    },
      
      'Step 5: verify stroke color is set' : function (browser) {
          //verify color applied via css
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'border-color', 'rgb(112, 72, 33)')
          browser.frame(null)
    },
      
      'Step 6: remove stroke and close panel' : function (browser) {
        page = browser.page.colorswatchtransparent();  
         page.colorswatchtransparent();

         browser.pause(300)

         page = browser.page.closepanel();  
          page.closepanel();

        page = browser.page.openstrokepanel();
          page.openstrokepanel()

        page = browser.page.borderallsides();
          page.borderallsidesbtndisabled()
        
        page = browser.page.closepanel();  
          page.closepanel();
        
          browser.end();
    }
};
module.exports = {
  '@tags' : ['colorpanel', 'colorbar'],
    'step 1: load page' : function (browser) {
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

      'step 2: select text component in iframe and open color panel' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
          .click('[data-qa-id="/grid/column/text"]')
          .frame(null) //closes iframe

        page = browser.page.opencolorpanel();
          page.opencolorpanel();
    },

      'step 3: select text color, enter click onto color spectrem, and select color hue' : function (browser) {
        page = browser.page.textcolorbtn();  
          page.textcolorbtn();  

        page = browser.page.colorspectrum();  
          page.colorspectrum();    

        page = browser.page.colorbar();  
          page.colorbarblue(); 

          browser.pause(500)
    },
      
      'step 4: verify text componet has css applied for selected color' : function (browser) {
          //verify color applied via css
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.verify.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'color', 'rgba(123, 124, 191, 1)')
          browser.frame(null)
    },

      'step 5: create custom color swatch in color panel' : function (browser) {
         page = browser.page.colorswatchcustom();  
          page.addswatch();
          browser.verify.elementPresent('[value="rgb(123, 124, 191)"]')
    },
      
      'step 6: duplicate custom color swatch in color panel' : function (browser) {
         page = browser.page.colorswatchcustom();  
          page.duplicateswatch();
          browser.verify.elementPresent('[value="rgb(123, 124, 191)"]')
    },
      
      'step 7: delete custom color swatch in color panel' : function (browser) {
         page = browser.page.colorswatchcustom();  
          page.deleteswatch();
          page.deleteswatch();

          //browser.pause(1000)
          browser.verify.elementNotPresent('[value="rgb(123, 124, 191)"]')

    },
      
      'Step 6: clear text color and close panel' : function (browser) {
        page = browser.page.colorswatchtransparent();  
          page.colorswatchtransparent();

          browser.pause(300);

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.verify.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'color', 'rgba(68, 68, 68, 1)')
          browser.frame(null)


        page = browser.page.closepanel();  
          page.closepanel();

          browser.end();
    }
};
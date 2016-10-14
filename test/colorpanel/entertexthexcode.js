module.exports = {
  'disabled' : true,
  '@tags' : ['colorpanel', 'hexcode'],
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

      'step 3: select text color, enter hex code, and close panel' : function (browser) {
        page = browser.page.textcolorbtn();  
          page.textcolorbtn();      

        page = browser.page.colorspectrum();  
          page.colorspectrum();

        page = browser.page.enterhexcode();  
          page.enterhexcode(); 

          browser.pause(300)
    },
      
      'step 4: verify text componet has text color hex code' : function (browser) {
          //verify color applied via css
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.verify.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'color', 'rgba(127, 255, 0, 1)')
        browser.frame(null)
    },

      'step 5: set text color to black and close panel' : function (browser) {
        page = browser.page.textcolorbtn();  
          page.textcolorbtn(); 

        page = browser.page.colorswatchblack();  
          page.colorswatchblack();

         browser.pause(300)

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.verify.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'color', 'rgba(0, 0, 0, 1)')
        browser.frame(null)

        page = browser.page.closepanel();  
          page.closepanel();
          
          browser.end();
    }
};
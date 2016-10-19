module.exports = {
  //'@disabled': true,
  '@tags' : ['textcomponent'],
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
    
    'Step 2: click-on text component' : function (browser) {
      browser.frame(0) //selects iframe - must call for 
        .waitForElementPresent('[data-qa-id="/grid/column/text"]', 1000)
        .click('[data-qa-id="/grid/column/text"]')
        .expect.element('.focused[data-qa-id="/grid/column/text"]').to.be.present
      browser.frame(null) //closes iframe
  },   
    
    'Step 3: keep selection on first text component and select an additional text component' : function (browser) {
      browser.frame(0) //selects iframe - must call for 
        .waitForElementPresent('[data-qa-id="/grid1/column1/text"]', 1000)
        
          .keys(browser.Keys.SHIFT, function(done) {
            browser.click('[data-qa-id="/grid/column1/text"]');
            browser.expect.element('.focused[data-qa-id="/grid/column1/text"]').to.be.present
            browser.expect.element('.focused[data-qa-id="/grid/column/text"]').to.be.present
            browser.keys(browser.Keys.NULL)//release shift key
        });
      
      browser.frame(null) //closes iframe
   },   
    
      'Step 4: set text component background color to red'  : function (browser) {
        page = browser.page.opencolorpanel();
          page.opencolorpanel();

        page = browser.page.backgroundcolorbtn();
          page.backgroundcolorbtn();

        page = browser.page.colorspectrum();  
          page.colorspectrum();

        browser.pause(300)
        
        browser.frame(0) //selects iframe - must call for 
          browser.expect.element('.focused[data-qa-id="/grid/column1/text"]').to.have.css('background-color').which.equals('rgba(191, 123, 123, 1)')
          browser.expect.element('.focused[data-qa-id="/grid/column/text"]').to.have.css('background-color').which.equals('rgba(191, 123, 123, 1)')
        browser.frame(null) //closes iframe
    },
      
      'Step 5: clear background color and close panel' : function (browser) {
        page = browser.page.colorswatchtransparent();  
          page.colorswatchtransparent();

          
        page = browser.page.closepanel();  
          page.closepanel();

         browser.pause(1000)

        // browser.frame(0) //selects iframe - must call for 
        //   browser.expect.element('.focused[data-qa-id="/grid/column1/text"]').to.have.css('background-color').which.equals('rgba(0, 0, 0, 1)')
        //   browser.expect.element('.focused[data-qa-id="/grid/column/text"]').to.have.css('background-color').which.equals('rgba(0, 0, 0, 1)')
        // browser.frame(null) //closes iframe
      //browser.end();

  },
};

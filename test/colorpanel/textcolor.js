module.exports = {
  '@tags' : ['colorpanel', 'textcolor'],
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

    'Step 2: select text color' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('.bc-text', 1000)
        .click('.bc-text')
        .frame(null) //closes iframe

      page = browser.page.opencolorpanel();
        page.opencolorpanel();

      page = browser.page.textcolorbtn();  
        page.textcolorbtn();

      page = browser.page.colorspectrum();  
        page.colorspectrum();
      
      page = browser.page.closepanel();  
        page.closepanel();
    },
    
    'Step 3: verify text color' : function (browser) {
        //verify color applied via css
      browser.frame(0) //selects iframe - must call to select anything within iframe
        browser.assert.cssProperty('.component-wrapper.bc-text-wrapper.focused', 'color', 'rgba(191, 123, 123, 1)')
        browser.frame(null)
        browser.end();
    }
};
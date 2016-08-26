module.exports = {
  '@tags' : ['colorpanel', 'strokecolor'], 
  'Step 1: page load' : function (browser) {
     var page = browser.page.pageload();

      page.navigate()
        page.pageload();
    
      page = browser.page.opensitemap();
        page.opensitemap();

      page = browser.page.opensite();
        page.opensite();
    },

    'Step 2: select stroke color' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('.bc-text', 1000)
        .click('.bc-text')
        .frame(null) //closes iframe

      page = browser.page.opencolorpanel();
        page.opencolorpanel();

      page = browser.page.selectstrokecolorbtn();  
        page.selectstrokecolorbtn()
      
      //page = browser.page.colorspectrum();  
        //page.colorspectrum();

        browser.verify.elementPresent('.swatch[title="R=0 G=0 B=0 A=100%"]')
        .click('.swatch[title="R=0 G=0 B=0 A=100%"]')
        .verify.valueContains('.color-hex-input-wrapper input[type=text]', '#000000') 
          
      page = browser.page.closepanel();  
        page.closepanel();
    },
        'Step 3: verify color applied via css': function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        //.assert.cssProperty('.component-wrapper .bc-text', 'border-color', 'rgba(0, 0, 0, 1)')
        //browser.frame(null)
        //browser.end();
    }
};
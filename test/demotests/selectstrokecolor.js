module.exports = {
  '@tags' : ['colorpanel'], 
  'select stroke color' : function (browser) {
     var page = browser.page.pageload();

      page.navigate()
        page.pageload();
    
      page = browser.page.opensitemap();
        page.opensitemap();

      page = browser.page.opensite();
        page.opensite();
    //}

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
        //browser.waitForElementVisible('.swatch[title=("R=0 G=0 B=0 A=100%")]', 500);
          
      //page = browser.page.closepanel();  
        //page.closepanel();
    
        //verify color applied via css
      //browser.frame(0) //selects iframe - must call to select anything within iframe
        //browser.assert.cssProperty('.bc-text', 'border-color', 'rgba(191, 122, 122, 1)')
        //browser.frame(null)
        //browser.end();
    }
};
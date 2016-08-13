module.exports = {
  '@tags' : ['colorpanel'],
  'open color opacity panel' : function (browser) {
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
        
      page = browser.page.colorspectrum();  
        page.colorspectrum();
      

      browser.verify.elementPresent('.ui-wrapper[title="A"]')
       .click('.ui-wrapper[title="A"]')
       browser.waitForElementVisible('.ui-wrapper[title="A"] .slider-wrapper input[type=range]', 1000);
        
      browser.moveToElement('.ui-wrapper[title="A"] .slider-wrapper input[type=range]', 50, 6)
        .mouseButtonDown(0)
          //.pause(300)
      browser.moveToElement('.ui-wrapper[title="A"] .slider-wrapper input[type=range]', 15, 6)
       browser.moveToElement('.ui-wrapper[title="A"] .slider-wrapper input[type=range]', 94, 6)
          .mouseButtonUp(0)
      
      //page = browser.page.closepanel();  
        //page.closepanel();
    
        //verify color applied via css
      //browser.frame(0) //selects iframe - must call to select anything within iframe
        //assert.cssProperty('.bc-text', 'color', 'rgba(191, 122, 122, 1)')
        //.frame(null)
        //browser.end();
    }
};
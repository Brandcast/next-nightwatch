module.exports = {
  '@tags' : ['dimensionspanel', 'grid'],
  'select text color' : function (browser) {
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

       page = browser.page.gridbtn();  
        page.gridbtn();

      page = browser.page.opendimensionspanel();  
        page.opendimensionspanel();
      
      browser.verify.elementPresent('[title="Gutter Width"]')
      browser.moveToElement('.ui-wrapper[title="Gutter Width"] .slider-wrapper input[type=range]', 50, 6)
          .mouseButtonDown(0)
          //.getValue('.select-input-wrapper input[type=text]', function (result) {
            //console.log(result.value);
          //});
          .moveToElement('.ui-wrapper[title="Gutter Width"] .slider-wrapper input[type=range]', 10, 6)
          .moveToElement('.ui-wrapper[title="Gutter Width"] .slider-wrapper input[type=range]', 80, 6)
          .moveToElement('.ui-wrapper[title="Gutter Width"] .slider-wrapper input[type=range]', 140, 6)
          .mouseButtonDown(0)
      //page = browser.page.closepanel();  
        //page.closepanel();
    
        //verify color applied via css
      //browser.frame(0) //selects iframe - must call to select anything within iframe
        //browser.assert.cssProperty('.bc-text', 'color', 'rgba(191, 122, 122, 1)')
        //browser.frame(null)
        browser.end();
    }
};
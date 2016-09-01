module.exports = {
  '@tags' : ['filterspanel', 'opacity'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();

        page = browser.page.opensitemap();
            page.opensitemap();
    
          page = browser.page.opensite();
            page.opensite();
    },
      
      'Step 2: open filters panel and select opacity' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.openfilterspanel();
          page.openfilterspanel();
      
        page = browser.page.filtersopacityslider();  
          page.filtersopacityslider();
    },

      'Step 3: select opacity via slider' : function (browser) { 
        browser.moveToElement('.ui-wrapper.left.auto-width.border-bottom-divide[title="Opacity"] .slider-wrapper input[type=range]', 2,4)
        .mouseButtonDown(0)
        browser.moveToElement('.ui-wrapper.left.auto-width.border-bottom-divide[title="Opacity"] .slider-wrapper input[type=range]', 15, 6)
        browser.moveToElement('.ui-wrapper.left.auto-width.border-bottom-divide[title="Opacity"] .slider-wrapper input[type=range]', 50, 6)
        .mouseButtonUp(0)
      
        //page = browser.page.closepanel();  
          //page.closepanel();
    //},
      
      //'Step 4: verify opacity is applied' : function (browser) { 
        //browser.frame(0) //selects iframe - must call to select anything within iframe
         //.assert.cssProperty('.focused.component-wrapper.bc-text-wrapper', '-webkit-filter', 'opacity(0.86)')
        //browser.frame(null);
      //browser.end();
    }
};
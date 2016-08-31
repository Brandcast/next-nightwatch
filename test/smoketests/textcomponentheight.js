module.exports = {
  '@tags' : ['dimensionspanel', 'height'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

      page.navigate()
       page.pageload();
    
      page = browser.page.opensitemap();
        page.opensitemap();

      page = browser.page.opensite();
        page.opensite(); 
  },
    
    'Step 2: open dimensions panel and select height from drop down menu' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('.bc-text', 1000)
        .click('.bc-text')
        .frame(null) //closes iframe
      
      page = browser.page.opendimensionspanel();
        page.opendimensionspanel()

       page = browser.page.heightdropdown();
        page.heightdropdown()

        //browser.setValue('.ui-wrapper[title="Height"] .select-input-container  .select-triangle-wrapper', '\u2193')
      //browser.keys('\u2193')

      //page = browser.page.closepanel();  
        //page.closepanel();
    //},
      
      //'Step 3: verify max width is applied' : function (browser) {
        //browser.frame(0) //selects iframe - must call to select anything within iframe
          //.assert.cssProperty('.focused.component-wrapper', 'max-width', '500px')
        //browser.frame(null)
        //browser.end();
    },
};

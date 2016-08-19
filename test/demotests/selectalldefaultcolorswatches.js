module.exports = {
  '@tags' : ['colorpanel', 'colorswatch'],
  'select black, white, and tranparent swatches in color panel' : function (browser) {
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

      page = browser.page.selectcolorswatchblack();  
        page.selectcolorswatchblack();

         //verify color applied via css
      browser.frame(0) //selects iframe - must call to select anything within iframe
        browser.assert.cssProperty('.bc-text', 'background-color', 'rgba(0, 0, 0, 1)')
        browser.frame(null)
          
      page = browser.page.selectstrokecolorbtn();  
        page.selectstrokecolorbtn();

      page = browser.page.selectcolorswatchwhite();  
        page.selectcolorswatchwhite();
    
        //verify color applied via css
      browser.frame(0) //selects iframe - must call to select anything within iframe
        browser.assert.cssProperty('.bc-text', 'border-color', 'rgb(255, 255, 255)')
        browser.frame(null)

      page = browser.page.selecttextcolorbtn();  
        page.selecttextcolorbtn();

      page = browser.page.selectcolorswatchtransparent();  
        page.selectcolorswatchtransparent();


        //verify color applied via css
      //browser.frame(0) //selects iframe - must call to select anything within iframe
        //browser.assert.cssProperty('.bc-text', 'color', 'transparent')
        //browser.frame(null)

      page = browser.page.closepanel();  
        page.closepanel();

        browser.end();
    }
};
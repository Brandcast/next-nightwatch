module.exports = {
  '@tags' : ['colorpanel', 'colorswatch'],
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

    'Step 2: background color set to black' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('.bc-text-wrapper', 1000)
          .click('.bc-text-wrapper')
          .frame(null) //closes iframe

        page = browser.page.opencolorpanel();
          page.opencolorpanel();

        page = browser.page.colorswatchblack();  
          page.colorswatchblack();

         //verify color applied via css
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'background-color', 'rgba(0, 0, 0, 0)')
          browser.frame(null)
    },     
      
    'Step 3: stroke color set to white' : function (browser) {
       page = browser.page.selectstrokecolorbtn();  
          page.selectstrokecolorbtn();

        page = browser.page.colorswatchwhite();  
          page.colorswatchwhite();
    
        //verify color applied via css
       //browser.frame(0) //selects iframe - must call to select anything within iframe
         // browser.assert.cssProperty('.focused.component-wrapper', 'border-color', 'rgb(255, 255, 255)')
          //browser.frame(null)
        
         browser.end();
    },
      
    //'Step 4: text color set to transparent' : function (browser) {
     // page = browser.page.selecttextcolorbtn();  
        //page.selecttextcolorbtn();

      //page = browser.page.selectcolorswatchtransparent();  
        //page.selectcolorswatchtransparent();


        //verify color applied via css
      //browser.frame(0) //selects iframe - must call to select anything within iframe
        //browser.assert.cssProperty('.focused.component-wrapper', 'color', 'transparent')
        //browser.frame(null)

     // page = browser.page.closepanel();  
      //  page.closepanel();

    //},
};
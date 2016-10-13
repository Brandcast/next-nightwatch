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
          .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
          .click('[data-qa-id="/grid/column/text"]')
          .frame(null) //closes iframe

        page = browser.page.opencolorpanel();
          page.opencolorpanel();

        page = browser.page.backgroundcolorbtn();  
          page.backgroundcolorbtn();

        page = browser.page.colorswatchblack();  
          page.colorswatchblack();

        browser.pause(300)

         //verify color applied via css
        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.verify.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'background-color', 'rgba(0, 0, 0, 1)')
          browser.frame(null)
    },     
      
    'Step 3: stroke color set to white' : function (browser) {
       page = browser.page.strokecolorbtn();  
          page.strokecolorbtn();

        page = browser.page.colorswatchwhite();  
          page.colorswatchwhite();

        browser.pause(300)
    
        //verify color applied via css
       browser.frame(0) //selects iframe - must call to select anything within iframe
         browser.verify.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'border-color', 'rgb(255, 255, 255)')
          browser.frame(null)
    },
      
    'Step 4: text color set to transparent' : function (browser) {
       page = browser.page.textcolorbtn();  
          page.textcolorbtn();

       page = browser.page.colorswatchtransparent();  
         page.colorswatchtransparent();

      browser.pause(300)

       browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.verify.cssProperty('.focused.component-wrapper', 'color', 'rgba(68, 68, 68, 1)')
          browser.frame(null)
    },
      
      'Step 7: reset text, background, and stroke color to default settings then close panel' : function (browser) {
        page = browser.page.textcolorbtn();  
          page.textcolorbtn();

        page = browser.page.colorswatchblack();  
          page.colorswatchblack();

        page = browser.page.backgroundcolorbtn();  
          page.backgroundcolorbtn();

        page = browser.page.colorswatchtransparent();  
          page.colorswatchtransparent();

        page = browser.page.openstrokepanel();
          page.openstrokepanel();

        page = browser.page.borderallsides();
          page.borderallsidesbtndisabled()
       
          browser.pause(300);

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.verify.cssProperty('.component-wrapper.bc-text-wrapper.focused[data-qa-id="/grid/column/text"]', 'background-color', 'rgba(0, 0, 0, 0)')
          browser.frame(null)


        page = browser.page.closepanel();  
          page.closepanel();

      browser.end();
    },
};

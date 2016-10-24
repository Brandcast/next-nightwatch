module.exports = {
  '@tags' : ['colorpanel', 'strokecolor'], 
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

    'Step 2: select stroke color' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('.component-wrapper.bc-text-wrapper', 1000)
        .click('.component-wrapper.bc-text-wrapper')
      browser.frame(null) //closes iframe
    },

    'Step 3: select stroke color' : function (browser) {

     page = browser.page.openstrokepanel();
          page.openstrokepanel()

       page = browser.page.borderallsides();
          page.borderallsidesbtnenabled()
    },

    'Step 4: select stroke color' : function (browser) {

      page = browser.page.opencolorpanel();
        page.opencolorpanel();

      page = browser.page.strokecolorbtn();
        page.strokecolorbtn();
      
      page = browser.page.colorswatchblack();  
        page.colorswatchblack();
    },
    
    'Step 5: verify color applied via css': function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .verify.cssProperty('.component-wrapper.bc-text-wrapper.focused', 'border-color', 'rgb(0, 0, 0)')
        browser.frame(null)
          
      page = browser.page.closepanel();  
        page.closepanel();
    },
  
    'Step 6: open stroke panel and deselect 4 sided border' : function (browser) {
         page = browser.page.openstrokepanel();
           page.openstrokepanel();

         page = browser.page.borderallsides();
            page.borderallsidesbtndisabled();

          page = browser.page.closepanel();  
            page.closepanel();

           browser.pause(1000)
          
      browser.end();
    }
};
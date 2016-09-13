module.exports = {
  '@tags' : ['showhidepanel', 'hidden', 'mobile', 'tablet', 'desktop'],
    'Step 1: page load' : function (browser) {
      var page = browser.page.pageload();

        page.navigate()
          page.pageload();
    
        page = browser.page.opensitemap();
          page.opensitemap();

        page = browser.page.opensite();
          page.opensite();
    },

      'Step 2: select "view all hidden elments" devices' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
         .waitForElementVisible('.bc-text', 1000)
         .click('.bc-text')
         .frame(null) //closes iframe

        page = browser.page.openshowhidepanel();
          page.openshowhidepanel();

        page = browser.page.viewallhiddenelementsbtn();
          page.viewallhiddenelementsbtn();
    //},
       
      //'Step 3: verify "view all hidden elements" is applied' : function (browser) { 
       //browser.frame(0) //selects iframe - must call to select anything within iframe
        //browser.verify.elementPresent('.root.show-mq-hidden.outline-view')
       //browser.frame(null)
    },
      
      'Step 4: select hide on all devices' : function (browser) { 
         page = browser.page.openshowhidepanel();
         page.openshowhidepanel();

        page = browser.page.desktopbtn();  
          page.desktopbtn();

        page = browser.page.tabletlandscapebtn();  
          page.tabletlandscapebtn();

        page = browser.page.tabletportraitbtn();  
          page.tabletportraitbtn();

        page = browser.page.mobilebtn();  
          page.mobilebtn();
    },
      
      'Step 5: verify "view all hidden elements" button is deselected' : function (browser) {
        page = browser.page.hideallhiddenelementsbtn();
          page.hideallhiddenelementsbtn();
    },

      'Step 6: verify "view all elements" button is selected' : function (browser) {
        browser.resizeWindow(640,960)




       page = browser.page.closepanel();  
         page.closepanel();

          browser.end();
    }
};
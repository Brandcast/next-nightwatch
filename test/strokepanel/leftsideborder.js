module.exports = {
  //'disabled' : true,
  '@tags' : ['strokepanel'],
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

      'Step 2: open stroke panel and select left side border' : function (browser) {
        browser.frame(0) //selects iframe - must cleft to select anything within iframe
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
        browser.frame(null) //closes iframe

        page = browser.page.openstrokepanel();
            page.openstrokepanel()

        page = browser.page.borderleftside();
            page.borderleftsidebtnenabled()
          //browser.verify.elementPresent('[data-qa-id="apply-stroke-to-left-sides"]')
            //.click('[data-qa-id="apply-stroke-to-left-sides"]')
  
        page = browser.page.closepanel();  
          page.closepanel();
    },

      'Step 3: verify text component has left side border' : function (browser) {
        browser.frame(0) //selects iframe - must cleft to select anything within iframe
         .verify.cssProperty('.focused.component-wrapper', 'border-left-width', '1px')
        browser.frame(null)
     
    },
  
       'Step 4: open stroke panel and deselect left side border' : function (browser) {
         page = browser.page.openstrokepanel();
           page.openstrokepanel()

        page = browser.page.borderleftside();
            page.borderleftsidebtndisabled()
         //browser.verify.elementPresent('[data-qa-id="apply-stroke-to-left-sides"]')
           //.click('[data-qa-id="apply-stroke-to-left-sides"]')
  
         page = browser.page.closepanel();  
          page.closepanel();
    },

      'Step 5: verify text component does not have left side border' : function (browser) {
        browser.frame(0) //selects iframe - must cleft to select anything within iframe
          .verify.cssProperty('.focused.component-wrapper', 'border-left-width', '0px')
        browser.frame(null)
      
      browser.end();
    }
};

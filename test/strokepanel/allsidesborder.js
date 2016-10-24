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

    'Step 2: open stroke panel and select 4 sided border' : function (browser) {
       browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementPresent('[data-qa-id="/grid/column/text"]', 1000)
        .click('[data-qa-id="/grid/column/text"]')
       browser.frame(null) //closes iframe

       page = browser.page.openstrokepanel();
          page.openstrokepanel()

       page = browser.page.borderallsides();
          page.borderallsidesbtnenabled()

        page = browser.page.closepanel();  
          page.closepanel();
    },

    'Step 3: verify text component has 4 sided border' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .assert.cssProperty('.focused.component-wrapper', 'border-width', '1px')
      browser.frame(null)
    },
  
    'Step 4: open stroke panel and deselect 4 sided border' : function (browser) {
         page = browser.page.openstrokepanel();
           page.openstrokepanel();

         page = browser.page.borderallsides();
            page.borderallsidesbtndisabled();

          page = browser.page.closepanel();  
            page.closepanel();
    },

      'Step 5: verify text component does not have border' : function (browser) {
        browser.frame(0) //selects iframe - must cright to select anything within iframe
          .verify.cssProperty('.focused.component-wrapper', 'border-width', '0px')
        browser.frame(null)

         browser.pause(1000)

      browser.end();
    }
};

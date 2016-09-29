module.exports = {
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
        .waitForElementVisible('.bc-text', 1000)
        .click('.bc-text')
       browser.frame(null) //closes iframe

       page = browser.page.openstrokepanel();
          page.openstrokepanel()

        browser.verify.elementPresent('[data-qa-id="apply-stroke-to-all-sides"]')
          .click('[data-qa-id="apply-stroke-to-all-sides"]')
  
       page = browser.page.closepanel();  
         page.closepanel();
    },

    'Step 3: verify text component has 4 sided border' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
        .assert.cssProperty('.focused.component-wrapper', 'border-width', '3px')
      browser.frame(null)
     browser.end();
    }
};

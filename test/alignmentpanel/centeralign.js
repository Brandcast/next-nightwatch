module.exports = {
  '@tags' : ['grid'],
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
  
    'Step 2: click text component and then select grid layout' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('[data-qa-id="/grid/column/text"]', 1000)
          .click('[data-qa-id="/grid/column/text"]')
          .frame(null) //closes iframe

        page = browser.page.gridlayoutbtn();  
          page.gridlayoutbtn();
    },

      'Step 3: open alignment panel and select center align' : function (browser) {
        page = browser.page.alignmentpanel();
          page.openalignmentpanel(); 
          page.centeralignenabled();
    },

      'Step 4: verify grid has center alignment applied via css class' : function (browser) {
        browser.frame(0) //selects iframe - must call to select anything within iframe
          .verify.elementPresent('.bc-grid-wrapper.focused.bc-center')
          .frame(null) //closes iframe

        page = browser.page.closepanel();  
            page.closepanel();
      
        browser.end();
    }
};
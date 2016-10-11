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
          .waitForElementVisible('.bc-text', 1000)
          .click('.bc-text')
          .frame(null) //closes iframe

        page = browser.page.gridlayoutbtn();  
          page.gridlayoutbtn();

    },

    'Step 3: open alignment panel and select left align' : function (browser) {
      var page = browser.page.alignmentpanel();
        page.openalignmentpanel(); 
          page.leftalignenabled();
      
        browser.end();
    }
};
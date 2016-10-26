module.exports = {
  //'@disabled': true,
  '@tags' : ['textcomponent'],
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
    
    'Step 2: click-on text component' : function (browser) {
      browser.frame(0) //selects iframe - must call for 
        .waitForElementPresent('[data-qa-id="/grid/column/text"]', 1000)
        .click('[data-qa-id="/grid/column/text"]')
        .expect.element('.focused[data-qa-id="/grid/column/text"]').to.be.present
      browser.frame(null) //closes iframe
  },   
    
    'Step 3: keep selection on first text component and select an additional text component' : function (browser) {
      browser.frame(0) //selects iframe - must call for 
        .waitForElementPresent('[data-qa-id="/grid1/column1/text"]', 1000)
        
          .keys(browser.Keys.SHIFT, function(done) {
            browser.click('[data-qa-id="/grid/column1/text"]');
              browser.expect.element('.focused[data-qa-id="/grid/column1/text"]').to.be.present
              browser.expect.element('.focused[data-qa-id="/grid/column/text"]').to.be.present
            browser.keys(browser.Keys.NULL)//release shift key
        });
      
      browser.frame(null) //closes iframe
   },   
    
      'Step 4: set border to all sides'  : function (browser) {

         page = browser.page.openstrokepanel();
          page.openstrokepanel()

       page = browser.page.borderallsides();
          page.borderallsidesbtnenabled()

        page = browser.page.closepanel();  
          page.closepanel();

        browser.frame(0) //selects iframe - must call for 
          browser.expect.element('.focused[data-qa-id="/grid/column1/text"]').to.have.css('border-style').which.equals('solid')
          browser.expect.element('.focused[data-qa-id="/grid/column/text"]').to.have.css('border-style').which.equals('solid')
        browser.frame(null) //closes iframe
    },
  
      'Step 4: open stroke panel and deselect 4 sided border' : function (browser) {
         page = browser.page.openstrokepanel();
           page.openstrokepanel();

          page = browser.page.borderallsides();
            page.borderallsidesbtndisabled();
          
          browser.pause(300);
          
          page = browser.page.closepanel();  
            page.closepanel();

          browser.pause(300);

          browser.frame(0) //selects iframe - must call for 
            browser.expect.element('.focused[data-qa-id="/grid/column1/text"]').to.have.css('border-style').which.equals('none')
            browser.expect.element('.focused[data-qa-id="/grid/column/text"]').to.have.css('border-style').which.equals('none')
          browser.frame(null) //closes iframe
     },
      
      'Step 5: click on image and verify multiselect is disabled' : function (browser) {
        browser.frame(0) //selects iframe - must call for 
          browser.verify.elementPresent('[data-qa-id="/grid/column/image"]')
          browser.click('[data-qa-id="/grid/column/image"]')
          browser.expect.element('.focused[data-qa-id="/grid/column1/text"]').to.not.be.present
          browser.expect.element('.focused[data-qa-id="/grid/column/text"]').to.not.be.present
        browser.frame(null) //closes iframe
      browser.pause(1000);
      browser.end();

  },
};

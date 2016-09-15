module.exports = {
  '@disabled': true,
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
      .waitForElementPresent('.bc-text', 1000)
      .click('.bc-text')
      .expect.element('.bc-text').to.be.selected
      //browser.frame(null) //closes iframe
      
      //browser.end();

  },
};

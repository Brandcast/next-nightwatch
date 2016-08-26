module.exports = {
  'test' : function (browser) {
   var page = browser.page.pageload();
    page.navigate()
      page.pageload();

    page = browser.page.opensitemap();
      page.opensitemap();

    page = browser.page.opensite();
      page.opensite();
      
      browser.frame(0) //selects iframe - must call for 
      .waitForElementPresent('.bc-text', 1000)
      .click('.bc-text')
      //.pause(500)
      //.expect.element('.bc-text-content').to.be.selected
      browser.frame(null) //closes iframe
      
      browser.end();

  },
};

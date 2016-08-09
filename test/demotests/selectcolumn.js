module.exports = {
  'test' : function (browser) {
   var page = browser.page.pageload();
    page.navigate()
      page.pageload();

    page = browser.page.opensite();
      page.opensite();
      
      browser.frame(0) //selects iframe - must call for 
      .waitForElementPresent('.bc-text-content', 1000)
      .click('.bc-text-content')
      //.pause(500)
      //.expect.element('.bc-text-content').to.be.selected
      browser.frame(null) //closes iframe
      
      browser.end();

  },
};

//.verify.elementPresent('h5[title="About Us (page2)"]', 1, 1')
      //.moveToElement('h5[title="About Us (page2)"]', 1, 1)
      // .click('span[data-id="44856863-ffe6-44d4-8787-e0dad3c93ecf"]')
module.exports = {
  'test' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.opensitemap();
    	page.opensitemap();
      

      browser.frame('iframe') //selects iframe - must call to select anything within iframe
        .waitForElementVisible('iframe', 1000)
        .moveToElement('iframe', 25, 25)
        .doubleClick()
        .frame(null) 
     //page = browser.page.opensite();
    	//page.opensite();

      //browser.end()
  },
};


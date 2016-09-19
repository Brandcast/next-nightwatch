module.exports = {
  '@disabled': true,
  'step 1: page load and open sitemap' : function (browser) {
   var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.openwebsitebtn();
      page.openwebsitebtn();
   
    page = browser.page.opensitemap();
      page.opensitemap(); 
  },

  'step 2: sitemap slider' : function (browser) {
    browser.frame('iframe') //selects iframe - must call to select anything within iframe
        .waitForElementVisible('iframe', 1000)
        .moveToElement('iframe', 25, 25)
        .doubleClick()
        .frame(null) 
      
      browser.moveToElement('[id="slider1"]', 80, 4)
        .mouseButtonDown(0)
        .pause(300)
        .moveToElement('[id="slider1"]', 15, 4)
        .mouseButtonUp(0)
        .pause(1000)
        .end();
  },
};

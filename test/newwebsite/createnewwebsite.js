module.exports = {
  'disabled' : true,
  '@tags' : ['newwebsite'],
  'Step 1: load page' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();
  },
    
    'Step 2: open "new website" panel and enter a value into website name and subdomain input fields' : function (browser) {
     page = browser.page.newwebsite();
        page.newwebsitebtn(); 

      browser.setValue('[title="Website Name"] input[type=text]', 'z')
      browser.verify.valueContains('[title="Website Name"] input[type=text]', 'z')

      browser.setValue('[name="subdomainName"]', 'z')
      browser.verify.valueContains('[name="subdomainName"]', 'z')
  },

    'Step 3: click "new website" button and verify user is navigated to the site map' : function (browser) {
     page = browser.page.newwebsite();
        page.createwebsitebtn();

      browser.waitForElementVisible('.site-map-container', 1000);
  },

    'Step 4: verify page preview is present and double click to open site editor' : function (browser) {
      page = browser.page.opensite();
        page.opensite(); 
  },

    'Step 5: verify user in in site editor and close editor tab' : function (browser) {
      browser.frame(0)
        .verify.elementPresent('.root.outline-view')
       browser.frame(null)

       page = browser.page.closetab();
        page.closetab(); 

      browser.end()
  },
};


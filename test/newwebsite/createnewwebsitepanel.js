module.exports = {
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

    'Step 3: close "new website" panel via close button, reopen and verify input fields are blank' : function (browser) {
     page = browser.page.newwebsite();
        page.closebtn(); 
        page.newwebsitebtn();

     browser.verify.valueContains('[title="Website Name"] input[type=text]', '')
     browser.verify.valueContains('[name="subdomainName"]', '')
  },
    
    'Step 4: enter a value into website name and subdomain input fields' : function (browser) {
      browser.setValue('[title="Website Name"] input[type=text]', 'z')
      browser.verify.valueContains('[title="Website Name"] input[type=text]', 'z')

       browser.setValue('[name="subdomainName"]', 'z')
       browser.verify.valueContains('[name="subdomainName"]', 'z')
  },

    'Step 5: close "new website" panel via close button, reopen and verify input fields are blank' : function (browser) {
     page = browser.page.newwebsite();
        page.cancelbtn(); 
        page.newwebsitebtn();

     browser.verify.valueContains('[title="Website Name"] input[type=text]', '')
     browser.verify.valueContains('[name="subdomainName"]', '')

      browser.end()
  },
};


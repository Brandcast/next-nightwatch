module.exports = {
  'disabled' : true, //disabled due to existing bug
  '@tags' : ['newwebsite'],
  'step 1: load page' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();
  },

    'step 2: open "new website" panel and enter a website name' : function (browser) {
      page = browser.page.newwebsite();
        page.newwebsitebtn(); 
        page.newwebsitenameinput();
        browser.setValue('[title="Website Name"] input[type=text]', 'z')
        browser.verify.valueContains('[title="Website Name"] input[type=text]', 'z')
  },


    'step 3: clear out website name and verify error message is displayed' : function (browser, selector) {
        browser.getValue('[title="Website Name"] input[type=text]', function(result){
        for (c in result.value){
          browser.setValue('[title="Website Name"] input[type=text]', "\u0008", function(response) {
            browser.keys('\uE007');
            browser.pause(500);
            this.assert.visible('.text-input-error', "A Website Name is required");
            })
        };
    
    })
        page.closebtn();
      browser.end()
  },
};


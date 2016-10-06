module.exports = {
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
        browser.setValue('[title="Website Name"] input[type=text]', 'zzzz')
        browser.verify.valueContains('[title="Website Name"] input[type=text]', 'zzz')
  },


    'step 3: clear out website name and verify error message is displayed' : function (browser, selector) {
        // browser.getValue('input[type=text]', function(result){
        // for (c in result.value){
        //   browser.setValue('input[type=text]', "\u0008", function(response) {
        //     browser.keys('\uE007');
        //     browser.pause(500);
        //     this.assert.visible('.text-input-error', "A Website Name is required");
             browser.end()
    //         })
    //     };
    // })
  }
};


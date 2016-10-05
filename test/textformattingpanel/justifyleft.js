module.exports = {
  '@tags' : ['textformatting'],
  'step 1: load page' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.openwebsitebtn();
      page.openwebsitebtn();
  },
  
    'step 2: open site map' : function (browser) {
      var page = browser.page.opensitemap();
        page.opensitemap(); 
  
      page = browser.page.opensite();
        page.opensite(); 
  },

    'step 3: select text component' : function (browser) {
      browser.frame(0) //selects iframe - must call to select anything within iframe
         .waitForElementVisible('.bc-text', 1000)
         .click('.bc-text')
         .frame(null) //closes iframe
  },

    'step 4: open text formatting panel' : function (browser) {
      var page = browser.page.opentextformattingpanel();
        page.opentextformattingpanel(); 
        browser.pause(300)
  },

    'step 5: disable/enable left justify' : function (browser) {
      var page = browser.page.justifytextformatting();
        page.justifycenterbtnenabled();
       
      page.justifyleftbtnenabled(); 
  
         browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.component-wrapper.bc-text-wrapper.focused')
          browser.expect.element('.component-wrapper.bc-text-wrapper.focused').to.have.css('text-align').which.equals('left')
        browser.frame(null)

       page.justifyleftbtndisabled(); 

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.component-wrapper.bc-text-wrapper.focused')
          browser.expect.element('.component-wrapper.bc-text-wrapper.focused').to.have.css('text-align').which.equals('left')
        browser.frame(null)

      browser.end()
  },
};


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
         .waitForElementPresent('[data-qa-id="/grid/column/text"]', 1000)
         .click('[data-qa-id="/grid/column/text"]')
         .frame(null) //closes iframe
  },

    'step 4: open text formatting panel' : function (browser) {
      var page = browser.page.opentextformattingpanel();
        page.opentextformattingpanel(); 
        browser.pause(300)
  },

    'step 5: disable/enable center justify' : function (browser) {
      var page = browser.page.justifytextformatting();
       page.justifycenterbtnenabled(); 

       browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused[data-qa-id="/grid/column/text"]')
          browser.expect.element('.focused[data-qa-id="/grid/column/text"]').to.have.css('text-align').which.equals('center')
        browser.frame(null)

       page.justifycenterbtndisabled(); 

        browser.frame(0) //selects iframe - must call to select anything within iframe
          browser.assert.elementPresent('.focused[data-qa-id="/grid/column/text"]')
          browser.expect.element('.focused[data-qa-id="/grid/column/text"]').to.have.css('text-align').which.does.not.equal('center')
        browser.frame(null)
  
      browser.end()
  },
};


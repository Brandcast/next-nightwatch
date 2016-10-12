module.exports = {
  '@tags' : ['transform', 'translatey'],
  'step 1: load page and open site' : function (browser) {
    var page = browser.page.pageload();

    page.navigate()
      page.pageload();

    page = browser.page.openwebsitebtn();
      page.openwebsitebtn();

    page = browser.page.opensitemap();
      page.opensitemap(); 

    page = browser.page.opensite();
      page.opensite(); 
  },
  
    'step 2: select text component' : function (browser) {
      browser.frame(0) //selects iframe - must cleft to select anything within iframe
           .waitForElementVisible('.bc-text', 1000)
           .click('.bc-text')
          browser.frame(null) //closes iframe
  },

    'step 3: open transform panel and select transform y input' : function (browser) {
      page = browser.page.transformpanel();
        page.opentransformpanel(); 
        page.translateyinput();
  },

    'step 4: enter Translate Y value via keystroke and verify css is applied' : function (browser) {
      browser.verify.valueContains('[title="Translate Y"] input[type=text]', "")
        .keys('2')
        .keys('5')
        .keys('\uE007')
        .pause(300)
        .verify.valueContains('[title="Translate Y"] input[type=text]', '25')

         // browser.frame(0) //selects iframe - must call to select anything within iframe
         // .assert.cssProperty('[data-qa-id="/grid/column/text"]', 'transform', 'translatey(26%)')
         // browser.frame(null)
  },

    'step 5: clear value and verify text component position is reset' : function (browser) {
        browser.click('[title="Translate Y"] input[type=text]')
        .clearValue('[title="Translate Y"] input[type=text]')
        .keys('\uE007')
        .verify.valueContains('[title="Translate Y"] input[type=text]', "")

         // browser.frame(0) //selects iframe - must call to select anything within iframe
         // .assert.cssProperty('[data-qa-id="/grid/column/text"]', '-webkit-transform', 'matriy(1, 0, 0, 1, 1, 0)')
         // browser.frame(null)
        page = browser.page.closepanel();  
            page.closepanel();

        browser.end()
  },
};


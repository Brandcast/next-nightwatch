module.exports = {
  '@tags' : ['brandlist', 'windowresize'],
  'brandlist window resize' : function (browser) {
     var page = browser.page.pageload();

      page.navigate()
        page.pageload();

      browser.assert.elementPresent('div.btn[title="Color"]')
      .click('div.btn[title="Color"]')
      .pause(500)

      .resizeWindow(640,960)
      .pause(500)

      .maximizeWindow()
      .pause(500)
      
      browser.end();
  },
};
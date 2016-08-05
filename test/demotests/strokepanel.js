module.exports = {
  '@tags' : ['strokepanel'],
  'open stroke panel' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      
       page = browser.page.openstrokepanel();
        page.openstrokepanel()

      //.assert.elementPresent('div.btn[title="Stroke"]')
      //.click('div.btn[title="Stroke"]')
      //.pause(500)
      //.assert.elementPresent('.panel-body')
      //.click('.svg-container')
      //.verify.elementNotPresent('.panel-body')
      browser.end();
    }
};
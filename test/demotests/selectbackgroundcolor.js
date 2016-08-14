module.exports = {
  '@tags' : ['colorpanel'],
  'select background color' : function (browser) {
     var page = browser.page.pageload();

      page.navigate()
        page.pageload();
    
      page = browser.page.opensitemap();
        page.opensitemap();

      page = browser.page.opensite();
        page.opensite();
    //}

      browser.frame(0) //selects iframe - must call to select anything within iframe
        .waitForElementVisible('.bc-text', 1000)
        .click('.bc-text')
        .frame(null) //closes iframe

      page = browser.page.opencolorpanel();
        page.opencolorpanel();

      page = browser.page.colorspectrum();  
        page.colorspectrum();
          
      //page = browser.page.selectbackgroundcolorbtn();  
        //page.selectbackgroundcolorbtn();
       browser.verify.elementPresent('[title="Text Color"]')
        .click('[title="Text Color"] .btn')
        .expect.element('.btn::before').to.be.selected
      
      //page = browser.page.closepanel();  
        //page.closepanel();
    
        //verify color applied via css
      //browser.frame(0) //selects iframe - must call to select anything within iframe
        //browser.assert.cssProperty('.bc-text', 'color', 'rgba(68, 68, 68, 1)')
        //browser.frame(null)
        //browser.end();
    }
};
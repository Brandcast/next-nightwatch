module.exports = {
  'test' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('h5', 1000)
      .moveToElement('h5', 1, 1)
      .doubleClick()
      
      .frame(0) //selects iframe - must call for 
      .waitForElementVisible('h5', 1000)
      .click('h5')
      .frame(null) //closes iframe
      .end();

  },
};

//.verify.elementPresent('h5[title="About Us (page2)"]', 1, 1')
      //.moveToElement('h5[title="About Us (page2)"]', 1, 1)
      // .click('span[data-id="44856863-ffe6-44d4-8787-e0dad3c93ecf"]')
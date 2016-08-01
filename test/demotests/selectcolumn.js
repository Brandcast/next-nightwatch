module.exports = {
  'test' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('h5[title="FBI Ends One of Longest Investigations, With Mystery Unsolved (page)"]', 1000)
      .moveToElement('h5[title="FBI Ends One of Longest Investigations, With Mystery Unsolved (page)"]', 1, 1)
      .doubleClick()
      
      .frame(0)
      .waitForElementVisible('[data-id="44856863-ffe6-44d4-8787-e0dad3c93ecf"]', 1000)
      .click('span[data-id="44856863-ffe6-44d4-8787-e0dad3c93ecf"]')
      .end();

  },
};

//.verify.elementPresent('h5[title="About Us (page2)"]', 1, 1')
      //.moveToElement('h5[title="About Us (page2)"]', 1, 1)
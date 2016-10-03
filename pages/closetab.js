var closetabCommands = {
 closetab : function() {
    this.waitForElementVisible('@closetabbtn', 1000)
      this.api.click('.tab.selected .tab-close-container')
          .assert.elementNotPresent('span [id="app"]')
  }
};

module.exports = {
  commands: [closetabCommands],
  elements: {
    closetabbtn: {
    	selector: '.tab.selected .tab-close-container'
    }
  }
};

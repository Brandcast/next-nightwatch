var closetabCommands = {
 closetab : function() {
    this.waitForElementVisible('.tab.selected', 1000)
      this.api.click('.tab.selected .tab-close-container')
          .assert.elementNotPresent('iframe')
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

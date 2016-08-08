var closepanelCommands = {
 closepanel : function() {
    this.verify.elementPresent('.panel-body')
      this.api.click('div.panel-close-container')
      .assert.elementNotPresent('.panel-body')
  }
};

module.exports = {
  commands: [closepanelCommands],
  elements: {
    closepanelbtn: {
    	selector: 'div.panel-close-container'
    }
  }
};

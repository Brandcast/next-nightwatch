var opentextformattingpanelCommands = {
  opentextformattingpanel: function() {
    this.verify.elementPresent('@textformattingpanelbtn')
      .click('div.ui-wrapper[title="Text Formatting"]')
      .verify.containsText('.overlay-label.drag-handle', 'Text Formatting')
  }
};

module.exports = {
  commands: [opentextformattingpanelCommands],
  elements: {
    textformattingpanelbtn: {
    	selector: 'div.ui-wrapper[title="Text Formatting"]'
    }
  }
};

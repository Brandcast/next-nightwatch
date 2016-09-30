var opentransformpanelCommands = {
  opentransformpanel: function() {
    this.verify.elementPresent('@transformpanelbtn')
      .click('div.ui-wrapper[title="Transform"]')
      .verify.containsText('.overlay-label.drag-handle', 'Transform')
  }
};

module.exports = {
  commands: [opentransformpanelCommands],
  elements: {
    transformpanelbtn: {
    	selector: 'div.ui-wrapper[title="Transform"]'
    }
  }
};

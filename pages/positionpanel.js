var positionpanelCommands = {
  openpositionpanel: function() {
    this.verify.elementPresent('@positionpanelbtn')
      .click('div.ui-wrapper[title="Position"]')
      .verify.containsText('.overlay-label.drag-handle', 'Position')
  }
};

module.exports = {
  commands: [positionpanelCommands],
  elements: {
    positionpanelbtn: {
    	selector: 'div.ui-wrapper[title="Position"]'
    }
  }
};

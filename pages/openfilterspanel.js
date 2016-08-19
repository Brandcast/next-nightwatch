var openfilterspanelCommands = {
  openfilterspanel: function() {
    this.verify.elementPresent('@filterspanelbtn')
      .click('div.ui-wrapper[title="Filters"]')
      .verify.containsText('.overlay-label.drag-handle', 'Filters')
  }
};

module.exports = {
  commands: [openfilterspanelCommands],
  elements: {
    filterspanelbtn: {
    	selector: 'div.ui-wrapper[title="Filters"]'
    }
  }
};

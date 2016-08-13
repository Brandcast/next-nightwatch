var openstrokepanelCommands = {
  openstrokepanel: function() {
    this.verify.elementPresent('@strokepanelbtn')
      .click('div.ui-wrapper[title="Stroke"]')
      .verify.containsText('.overlay-label drag-handle', 'Stroke')
  }
};

module.exports = {
  commands: [openstrokepanelCommands],
  elements: {
    strokepanelbtn: {
    	selector: 'div.ui-wrapper[title="Stroke"]'
    }
  }
};

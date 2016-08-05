var openstrokepanelCommands = {
  openstrokepanel: function() {
    this.verify.elementPresent('@strokepanelbtn')
      .click('div.btn[title="Stroke"]')
      .verify.containsText('.overlay-label', 'Stroke')
  }
};

module.exports = {
  commands: [openstrokepanelCommands],
  elements: {
    strokepanelbtn: {
    	selector: 'div.btn[title="Stroke"]'
    }
  }
};

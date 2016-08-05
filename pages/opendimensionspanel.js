var opendimensionspanelCommands = {
  opendimensionspanel: function() {
    this.verify.elementPresent('@dimensionspanelbtn')
      .click('@dimensionspanelbtn')
      .verify.containsText('.overlay-label', 'Dimensions');
  }
};

module.exports = {
  commands: [opendimensionspanelCommands],
  elements: {
    dimensionspanelbtn: {
    	selector: 'div.btn[title="Dimensions"]'
    }
  }
};

var opendimensionspanelCommands = {
  opendimensionspanel: function() {
    this.verify.elementPresent('@dimensionspanelbtn')
      .click('@dimensionspanelbtn')
      .verify.containsText('.overlay-label.drag-handle', "Dimensions");
  }
};

module.exports = {
  commands: [opendimensionspanelCommands],
  elements: {
    dimensionspanelbtn: {
    	selector: 'div.ui-wrapper[title="Dimensions"]'
    }
  }
};

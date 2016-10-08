var dimensionspanelCommands = {
  opendimensionspanel: function() {
    this.verify.elementPresent('@dimensionspanelbtn')
      .click('@dimensionspanelbtn')
      .verify.containsText('.overlay-label.drag-handle', "Dimensions");
  }
};

module.exports = {
  commands: [dimensionspanelCommands],
  elements: {
    dimensionspanelbtn: {
    	selector: 'div.ui-wrapper[title="Dimensions"]'
    }
  }
};

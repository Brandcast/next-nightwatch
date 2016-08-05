var opendimensionspanelCommands = {
  opendimensionspanel: function() {
    this.verify.elementPresent('@dimensionspanelbtn')
      .click('div.btn[title="dimensions"]')
      .verify.elementPresent('.overlay-label', "dimensions");
  }
};

module.exports = {
  commands: [opendimensionspanelCommands],
  elements: {
    dimensionspanelbtn: {
    	selector: 'div.btn[title="dimensions"]'
    }
  }
};

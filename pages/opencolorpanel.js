var opencolorpanelCommands = {
  opencolorpanel: function() {
    this.verify.elementPresent('@colorpanelbtn')
      .click('div.ui-wrapper[title="Color"]')
      .verify.containsText('.overlay-label drag-handle', 'Color')
  }
};

module.exports = {
  commands: [opencolorpanelCommands],
  elements: {
    colorpanelbtn: {
    	selector: 'div.ui-wrapper[title="Color"]'
    }
  }
};

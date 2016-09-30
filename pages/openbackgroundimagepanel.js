var openbackgroundimagepanelCommands = {
  openbackgroundimagepanel: function() {
    this.verify.elementPresent('@backgroundimagepanelbtn')
      .click('div.ui-wrapper[title="Background Image"]')
      .verify.containsText('.overlay-label.drag-handle', 'Background Image')
  }
};

module.exports = {
  commands: [openbackgroundimagepanelCommands],
  elements: {
    backgroundimagepanelbtn: {
    	selector: 'div.ui-wrapper[title="Background Image"]'
    }
  }
};

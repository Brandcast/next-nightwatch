var backgroundimagepanelCommands = {
  openbackgroundimagepanel: function() {
    this.verify.elementPresent('@backgroundimagepanelbtn')
      .click('div.ui-wrapper[title="Background Image"]')
      .verify.containsText('.overlay-label.drag-handle', 'Background Image')
  },

  uploadbackgroundimage: function() {
    this.verify.elementPresent('@backgroundimagedropzone')
      .click('div.ui-wrapper[title="Background Image"]')
      .verify.containsText('.overlay-label.drag-handle', 'Background Image')
  },
};

module.exports = {
  commands: [backgroundimagepanelCommands],
  elements: {
    backgroundimagepanelbtn: {
    	selector: 'div.ui-wrapper[title="Background Image"]'
    },

    backgroundimagedropzone: {
      selector: '.image-uploader-drop-zone input'
    },
  }
};

var heightdropdownCommands = {
  heightdropdown: function() {
    this.verify.elementPresent('@heightdropdown')
      .click('div.ui-wrapper[title="Height"]', '.')
      .verify.containsText('.overlay-label.drag-handle', 'Color')
  }
};

module.exports = {
  commands: [heightdropdownCommands],
  elements: {
    heightdropdown: {
    	selector: 'div.ui-wrapper[title="Height"]'
    }
  }
};

var openshowhidepanelCommands = {
  openshowhidepanel: function() {
    this.verify.elementPresent('@showhidepanelbtn')
      .click('.ui-wrapper[title="Show/Hide On Device"]')
      .verify.containsText('.overlay-label.drag-handle', 'Show/Hide On Device')

  }
};

module.exports = {
  commands: [openshowhidepanelCommands],
  elements: {
    showhidepanelbtn: {
    	selector: '.ui-wrapper[title="Show/Hide On Device"]'
    }
  }
};

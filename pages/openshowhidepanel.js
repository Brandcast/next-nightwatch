var openshowhidepanelCommands = {
  openshowhidepanel: function() {
    this.verify.elementPresent('@showhidepanelbtn')
      .click('div.ui-wrapper[title="Show/Hide On Device"]')
      .verify.containsText('.overlay-label drag-handle', 'Show/Hide On Device')

  }
};

module.exports = {
  commands: [openshowhidepanelCommands],
  elements: {
    showhidepanelbtn: {
    	selector: 'div.ui-wrapper[title="Show/Hide On Device"]'
    }
  }
};

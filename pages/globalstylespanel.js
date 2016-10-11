var globalstylespanelCommands = {
 openglobalstylespanel: function() {
    this.verify.elementPresent('@globalstylesbtn')
      .click('@globalstylesbtn')

    .verify.containsText('.overlay-label.drag-handle', 'Global Styles')
  }
};

module.exports = {
  commands: [globalstylespanelCommands],
  elements: {
    globalstylesbtn: {
    	selector: '[data-qa-id="global-styles-button"]'
    }
  }
};

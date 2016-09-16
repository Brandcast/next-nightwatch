var globalstylesbtnCommands = {
 globalstylesbtn: function() {
    this.verify.elementPresent('@globalstylesbtn')
      .moveToElement('@globalstylesbtn', 2, 2)
      this.api.mouseButtonClick()

    .verify.containsText('.overlay-label.drag-handle', 'Global Styles')
  }
};

module.exports = {
  commands: [globalstylesbtnCommands],
  elements: {
    globalstylesbtn: {
    	selector: '[data-qa-id="global-styles-button"]'
    }
  }
};

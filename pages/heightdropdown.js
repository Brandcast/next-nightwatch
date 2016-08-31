var heightdropdownCommands = {
  heightdropdown: function() {
    this.verify.elementPresent('@heightdropdown')
      .moveToElement('.ui-wrapper[title="Height"] .select-input-container  .select-triangle-wrapper', 2, 2)
        this.api.mouseButtonDown(0)
          //this.verify.valueContains('option', "100px")
  }
};

module.exports = {
  commands: [heightdropdownCommands],
  elements: {
    heightdropdown: {
      selector: '.ui-wrapper[title="Height"]'
    }
  }
};

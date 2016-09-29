var textformattingbtnCommands = {
 textformattingbtn: function() {
    this.verify.elementPresent('@textformattingbtn')
      .moveToElement('@textformattingbtn', 2, 2)
      this.api.mouseButtonClick()

    .verify.containsText('.overlay-label.drag-handle', 'Text Formatting')
  }
};

module.exports = {
  commands: [textformattingbtnCommands],
  elements: {
    textformattingbtn: {
    	selector: '[data-qa-id="text-formatting-button"]'
    }
  }
};

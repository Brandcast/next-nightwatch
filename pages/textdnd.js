var textdndCommands = {
  textdnd: function() {
    this.verify.elementPresent('@text')
      .moveToElement('@text', 1, 1)
      .mouseButtonDown(0)
      .moveToElement('.drop-zone', 4, 4)
      .mouseButtonUp(0)

    this.verify.elementPresent('[data-qa-id="/text3"]')
  }
};

module.exports = {
  commands: [textdndCommands],
  elements: {
    text: {
    	selector:'[title="Text"] .btn'
    }
  }
};

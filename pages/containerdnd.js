var containerdndCommands = {
  containerdnd: function() {
    this.verify.elementPresent('@container')
      .moveToElement('@container', 1, 1)
      .mouseButtonDown(0)
      .moveToElement('.drop-zone', 4, 4)
      .mouseButtonUp(0)

    this.verify.elementPresent('[data-qa-id="/container1"]')
  }
};

module.exports = {
  commands: [containerdndCommands],
  elements: {
    container: {
    	selector:'[title="Container"] .btn'
    }
  }
};

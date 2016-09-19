var griddndCommands = {
  griddnd: function() {
    this.verify.elementPresent('@grid')
      .moveToElement('@grid', 1, 1)
      .mouseButtonDown(0)
      .moveToElement('.drop-zone', 4, 4)
      .mouseButtonUp(0)

    this.verify.elementPresent('[data-qa-id="/grid0"]')
  }
};

module.exports = {
  commands: [griddndCommands],
  elements: {
    grid: {
    	selector:'[title="Grid"] .btn'
    }
  }
};

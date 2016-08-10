var colorbarCommands = {
 colorbar: function() {
    this.verify.elementPresent('@colorbar')
      .moveToElement('@colorbar', 210, 6)
      this.api.mouseButtonClick()
  }
};

module.exports = {
  commands: [colorbarCommands],
  elements: {
    colorbar: {
    	selector: '.hue-container'
    }
  }
};

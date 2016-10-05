var colorbarCommands = {
 colorbarred: function() {
    this.verify.elementPresent('@colorbar')
      .moveToElement('@colorbar', 3, 6)
      this.api.mouseButtonClick()
  },

  colorbarblue: function() {
    this.verify.elementPresent('@colorbar')
      .moveToElement('@colorbar', 145, 6)
      this.api.mouseButtonClick()
  },

  colorbarpurple: function() {
    this.verify.elementPresent('@colorbar')
      .moveToElement('@colorbar', 165, 6)
      this.api.mouseButtonClick()
  },
};

module.exports = {
  commands: [colorbarCommands],
  elements: {
    colorbar: {
    	selector: '.hue-container'
    }
  }
};

var colorspectrumCommands = {
  colorspectrum: function() {
    this.verify.elementPresent('@colorspectrum')
      .moveToElement('@colorspectrum', 75, 25)
      this.api.mouseButtonClick()
          
  }
};

module.exports = {
  commands: [colorspectrumCommands],
  elements: {
    colorspectrum: {
    	selector: '.spectrum-color-band'
    }
  }
};

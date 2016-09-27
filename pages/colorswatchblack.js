var colorswatchblackCommands = {
  colorswatchblack: function() {
        this.verify.elementPresent('@swatchblack')
        .click('@swatchblack')
        .verify.valueContains('.color-hex-input-wrapper input[type=text]', '#000000')
  }
};

module.exports = {
  commands: [colorswatchblackCommands],
  elements: {
    swatchblack: {
    	selector: '.swatch[title="R=0 G=0 B=0 A=100%"]'
    }
  }
};

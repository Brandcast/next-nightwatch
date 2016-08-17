var selectcolorswatchblackCommands = {
  selectcolorswatchblack: function() {
        this.verify.elementPresent('@swatchblack')
        .click('@swatchblack')
        .verify.valueContains('.color-hex-input-wrapper input[type=text]', '#000000')
  }
};

module.exports = {
  commands: [selectcolorswatchblackCommands],
  elements: {
    swatchblack: {
    	selector: '.swatch[title="R=0 G=0 B=0 A=100%"]'
    }
  }
};

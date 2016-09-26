var selectcolorswatchwhiteCommands = {
  selectcolorswatchwhite: function() {
        this.verify.elementPresent('@swatchwhite')
        .click('@swatchwhite')
        .verify.valueContains('.color-hex-input-wrapper input[type=text]', '#ffffff')
  }
};

module.exports = {
  commands: [selectcolorswatchwhiteCommands],
  elements: {
    swatchwhite: {
    	selector: '.swatch[title="R=255 G=255 B=255 A=100%"]'
    }
  }
};

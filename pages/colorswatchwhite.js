var colorswatchwhiteCommands = {
  colorswatchwhite: function() {
        this.verify.elementPresent('@swatchwhite')
        .click('@swatchwhite')
        .verify.valueContains('.color-hex-input-wrapper input[type=text]', '#ffffff')
  }
};

module.exports = {
  commands: [colorswatchwhiteCommands],
  elements: {
    swatchwhite: {
    	selector: '.swatch[title="R=255 G=255 B=255 A=100%"]'
    }
  }
};

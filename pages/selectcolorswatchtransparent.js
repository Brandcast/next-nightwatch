var selectcolorswatchtransparentCommands = {
  selectcolorswatchtransparent: function() {
        this.verify.elementPresent('@swatchtransparent')
        .click('@swatchtransparent')
        .verify.valueContains('.color-hex-input-wrapper input[type=text]', '')
  }
};

module.exports = {
  commands: [selectcolorswatchtransparentCommands],
  elements: {
    swatchtransparent: {
    	selector: '.swatch[title="No Color"]'
    }
  }
};

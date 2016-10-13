var colorswatchtransparentCommands = {
  colorswatchtransparent: function() {
        this.verify.elementPresent('@swatchtransparent')
        .click('@swatchtransparent')
        this.api.pause(300)
        .assert.valueContains('.color-hex-input-wrapper input[type=text]', '')
  }
};

module.exports = {
  commands: [colorswatchtransparentCommands],
  elements: {
    swatchtransparent: {
    	selector: '.swatch[title="No Color"]'
    }
  }
};

var colorswatchblackCommands = {
  colorswatchblack: function() {
        this.verify.elementPresent('@addswatch')
        .click('@swatchblack')
        .verify.valueContains('.color-hex-input-wrapper input[type=text]', '#000000')
  }
};

module.exports = {
  commands: [colorswatchblackCommands],
  elements: {
    addswatch: {
    	selector: '.class="ui-wrapper.size18 [title="Add Swatch"]'
    }
  }
};

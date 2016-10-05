var customcolorswatchCommands = {
  addswatch: function() {
        this.verify.elementPresent('@addswatchbtn')
        .click('addswatchbtn')
        //.verify.valueContains('.color-hex-input-wrapper input[type=text]', '#000000')
  }
};

module.exports = {
  commands: [customcolorswatchCommands],
  elements: {
    addswatchbtn: {
    	selector: '[title="Add Swatch"] .btn'
    }
  }
};

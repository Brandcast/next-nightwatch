var opacitysliderCommands = {
opacityslider: function() {
    this.verify.elementPresent('@opacityslider')
      //.setValue('@opacityslider', '\u0008')
      //.verify.valueContains('input[type=text]', '100')
  }
};

module.exports = {
  commands: [opacitysliderCommands],
  elements: {
    opacityslider: {
    	selector: '.ui-wrapper[title="A"] .slider-wrapper input[type=range]'
    }
  }
};

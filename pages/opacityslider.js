var opacitysliderCommands = {
opacityslider: function() {
    this.verify.elementPresent('@opacitymenu')
        .click('@opacitymenu')
    
    this.verify.elementPresent('.ui-wrapper[title="Opacity"] .slider-wrapper input[type=range]')
  }
};

module.exports = {
  commands: [opacitysliderCommands],
  elements: {
    opacitymenu: {
      selector: '.ui-wrapper[title="Opacity"]'
    },
    opacityslider: {
    	selector: '.ui-wrapper[title="Opacity"] .slider-wrapper input[type=range]'
    }
  }
};

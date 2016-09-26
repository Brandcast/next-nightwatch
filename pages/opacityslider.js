var opacitysliderCommands = {
opacityslider: function() {
    this.verify.elementPresent('@opacitymenu')
        .click('@opacitymenu')
    
    this.api.waitforElementVisible('.ui-wrapper[title="Opacity"] .slider-wrapper input[type=range]', 1000)
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

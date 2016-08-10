var opacitysliderCommands = {
opacityslider: function() {
    this.verify.elementPresent('@opacitymenu')
        .click('@opacitymenu')
        .waitforElementVisible('.ui-wrapper[title="A"] .slider-wrapper input[type=range]', 1000)
  }
};

module.exports = {
  commands: [opacitysliderCommands],
  elements: {
    opacitymenu: {
      selector: '.ui-wrapper[title="A"]'
    },
    opacityslider: {
    	selector: '.ui-wrapper[title="A"] .slider-wrapper input[type=range]'
    }
  }
};

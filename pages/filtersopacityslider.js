var filtersopacitysliderCommands = {
filtersopacityslider: function() {
    this.verify.elementPresent('@opacitymenu')
        .click('@opacityinput')
        //.waitforElementVisible('@opacityslider', 1000)
  }
};

module.exports = {
  commands: [filtersopacitysliderCommands],
  elements: {
    opacitymenu: {
      selector: '.ui-wrapper.left.auto-width.border-bottom-divide[title="Opacity"]'
    },
    opacityslider: {
      selector: '.ui-wrapper.left.auto-width.border-bottom-divide[title="Opacity"] .slider-wrapper input[type=range]'
    },
    opacityinput: {
    	selector: '.ui-wrapper.left.auto-width.border-bottom-divide[title="Opacity"] .select-input-wrapper'
    }
  }
};

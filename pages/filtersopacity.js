var filtersopacitysliderCommands = {
filtersopacityslider: function() {
    this.verify.elementPresent('@opacitymenu')
        this.click('@opacityinput')
          //this.waitforElementVisible('[data-qa-id="opacity-slider"]', 1000)
  }
};

module.exports = {
  commands: [filtersopacitysliderCommands],
  elements: {
    opacitymenu: {
      selector: '.ui-wrapper.left.auto-width.border-bottom-divide[title="Opacity"]'
    },
    //opacityslider: {
      //selector: '[data-qa-id="opacity-slider"]'
    //},
    opacityinput: {
    	selector: '.ui-wrapper.left.auto-width.border-bottom-divide[title="Opacity"] .select-input-wrapper input[type="text"]'
    }
  }
};

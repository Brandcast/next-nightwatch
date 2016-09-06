var selectopacityCommands = {
  selectopacity: function() {
    this.verify.elementPresent('.ui-wrapper.left.auto-width border-bottom-divide[title="Opacity"] .select-input-container input[type="text"]')
       .click('.ui-wrapper.left.auto-width.border-bottom-divide[title="Opacity"] .select-input-container input[type="text"]')
       .waitForElementVisible('[data-automation-id="opacity-slider"]', 1000);
        

  }
};

module.exports = {
  commands: [selectopacityCommands],
  elements: {
    opacityslider: {
    	selector: '[data-automation-id="opacity-slider"]'
    }
  }
};

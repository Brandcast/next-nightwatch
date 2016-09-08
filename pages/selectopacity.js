var selectopacityCommands = {
  selectopacity: function() {
    this.verify.elementPresent('.ui-wrapper[title="Opacity"] .select-input-container input[type="text"]')
       .click('.ui-wrapper[title="Opacity"] .select-input-container input[type="text"]')
       this.verify.elementPresent('.ui-wrapper[title="Opacity"] .select-input-container .slider-wrapper');
        

  }
};

module.exports = {
  commands: [selectopacityCommands],
  elements: {
    opacityslider: {
    	selector: '[data-qa-id="opacity-slider"]'
    }
  }
};

var selectopacityCommands = {
  selectopacity: function() {
    this.verify.elementPresent('.ui-wrapper[title="Opacity"]')
       .click('.ui-wrapper[title="Opacity"] .select-input-container')
       .waitForElementVisible('.ui-wrapper[title="Opacity"] input[type=range]', 1000);
        

  }
};

module.exports = {
  commands: [selectopacityCommands],
  elements: {
    opacityslider: {
    	selector: '.ui-wrapper[title="Opacity"] input[type=range]'
    }
  }
};

var opacityinputtextCommands = {
opacityinputtext: function() {
    this.verify.elementPresent('@opacitymenu')      
      .verify.valueContains('input[type=text]', '100')
  }
};

module.exports = {
  commands: [opacityinputtextCommands],
  elements: {
    opacitymenu: {
      selector: '.ui-wrapper[title="Opacity"]'
    },
    opacityinputtext: {
    	selector: '.ui-wrapper[title="Opacity"] .select-input-wrapper input[type=text]'
    }
  }
};

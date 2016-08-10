var opacityinputtextCommands = {
opacityinputtext: function() {
    this.verify.elementPresent('@opacitymenu')
      .setValue('@opacityinputtext', '\u0008')
      //.verify.valueContains('input[type=text]', '100')
  }
};

module.exports = {
  commands: [opacityinputtextCommands],
  elements: {
    opacitymenu: {
      selector: '.ui-wrapper[title="A"]'
    },
    opacityinputtext: {
    	selector: '.ui-wrapper[title="A"] .select-input-wrapper input[type=text]'
    }
  }
};

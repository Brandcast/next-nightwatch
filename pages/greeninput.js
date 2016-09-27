var greeninputCommands = {
  greeninput: function() {
    this.verify.elementPresent('.ui-wrapper.full-width[title="Green"] .select-input-container input[type="text"]')
       this.api.mouseButtonClick('.ui-wrapper.full-width[title="Green"] .select-input-container input[type="text"]');
        

  }
};

module.exports = {
  commands: [greeninputCommands],
  elements: {
    greeninput: {
    	selector: '.ui-wrapper.full-width[title="Green"]'
    }
  }
};

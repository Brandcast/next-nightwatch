var greeninputCommands = {
  greeninput: function() {
    this.verify.elementPresent('[title="Green"] input[type="text"]')
       this.api.mouseButtonClick('[title="Green"] input[type="text"]');
        

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

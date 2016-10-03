var blueinputCommands = {
  blueinput: function() {
    this.verify.elementPresent('[title="Blue"] input[type="text"]')
       this.api.mouseButtonClick('[title="Blue"] input[type="text"]');
        

  }
};

module.exports = {
  commands: [blueinputCommands],
  elements: {
    blueinput: {
    	selector: '.ui-wrapper.full-width[title="Blue"]'
    }
  }
};

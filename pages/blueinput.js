var blueinputCommands = {
  blueinput: function() {
    this.verify.elementPresent('.ui-wrapper.full-width[title="Blue"] .select-input-container input[type="text"]')
       this.api.mouseButtonClick('.ui-wrapper.full-width[title="Blue"] .select-input-container input[type="text"]');
        

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

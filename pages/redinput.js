var redinputCommands = {
  redinput: function() {
    this.verify.elementPresent('.ui-wrapper.full-width[title="Red"] .select-input-container input[type="text"]')
       this.api.mouseButtonClick('.ui-wrapper[title="Red"] .select-input-container input[type="text"]');
        

  }
};

module.exports = {
  commands: [redinputCommands],
  elements: {
    redinput: {
    	selector: '.ui-wrapper.full-width[title="Red"]'
    }
  }
};

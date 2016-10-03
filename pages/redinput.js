var redinputCommands = {
  redinput: function() {
    this.verify.elementPresent('[title="Red"] input[type="text"]')
       this.api.mouseButtonClick('[title="Red"] input[type="text"]');
        

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

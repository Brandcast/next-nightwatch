var showonmobilebtnCommands = {
  showonmobilebtn: function() {
    this.verify.elementPresent('.ui-wrapper.auto-width.current[title="Hide On Phone"] .btn')
       .click('@mobilebtn') 
       this.verify.elementPresent('.ui-wrapper.auto-width[title="Hide On Phone"] .btn')
  }
};

module.exports = {
  commands: [showonmobilebtnCommands],
  elements: {
   mobilebtn : {
    	selector: '[title="Hide On Phone"] .btn'
    }
  }
};

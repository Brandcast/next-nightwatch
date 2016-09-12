var mobilebtnCommands = {
  mobilebtn: function() {
    this.verify.elementPresent('@mobilebtn')
       .click('@mobilebtn') 
       this.verify.elementPresent('.ui-wrapper.auto-width.current[title="Hide On Phone"] .btn')
  }
};

module.exports = {
  commands: [mobilebtnCommands],
  elements: {
   mobilebtn : {
    	selector: '[title="Hide On Phone"] .btn'
    }
  }
};

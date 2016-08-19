var mobilebtnCommands = {
  mobilebtn: function() {
    this.verify.elementPresent('@mobilebtn')
       .click('@mobilebtn') 
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

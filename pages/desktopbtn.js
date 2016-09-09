var desktopbtnCommands = {
  desktopbtn: function() {
    this.verify.elementPresent('@desktopbtn')
       .click('@desktopbtn') 
  }
};

module.exports = {
  commands: [desktopbtnCommands],
  elements: {
   desktopbtn : {
    	selector: '[title="Hide On Desktop"] .btn'
    }
  }
};

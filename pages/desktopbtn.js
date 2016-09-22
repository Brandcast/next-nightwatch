var desktopbtnCommands = {
  hidedesktopbtn: function() {
    this.verify.elementPresent('@desktopbtn')
       .click('@desktopbtn') 
    this.verify.elementPresent('.ui-wrapper.auto-width.current[title="Hide On Desktop"] .btn')
  },
  showdesktopbtn: function() {
    this.verify.elementPresent('@desktopbtn')
       .click('@desktopbtn') 
    this.verify.elementPresent('.ui-wrapper.auto-width[title="Hide On Desktop"] .btn')
  },
};

module.exports = {
  commands: [desktopbtnCommands],
  elements: {
   desktopbtn : {
    	selector: '[title="Hide On Desktop"] .btn'
    }
  }
};

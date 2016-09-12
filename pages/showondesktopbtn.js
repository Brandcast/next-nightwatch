var showondesktopbtnCommands = {
  showondesktopbtn: function() {
    this.verify.elementPresent('.ui-wrapper.auto-width.current[title="Hide On Desktop"] .btn')
       .click('@desktopbtn') 
    this.verify.elementPresent('.ui-wrapper.auto-width[title="Hide On Desktop"] .btn')
  },
};

module.exports = {
  commands: [showondesktopbtnCommands],
  elements: {
   desktopbtn : {
    	selector: '[title="Hide On Desktop"] .btn'
    }
  }
};

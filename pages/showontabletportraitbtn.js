var showontabletportraitbtnCommands = {
  showontabletportraitbtn: function() {
   this.verify.elementPresent('.ui-wrapper.auto-width.current[title="Hide On Tablet Portrait"] .btn')
       .click('@tabletportraitbtn') 
       this.verify.elementPresent('.ui-wrapper.auto-width[title="Hide On Tablet Portrait"] .btn')
      
  }
};

module.exports = {
  commands: [showontabletportraitbtnCommands],
  elements: {
   tabletportraitbtn : {
    	selector: '[title="Hide On Tablet Portrait"] .btn'
    }
  }
};

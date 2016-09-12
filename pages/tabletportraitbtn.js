var tabletportraitbtnCommands = {
  tabletportraitbtn: function() {
    this.verify.elementPresent('@tabletportraitbtn')
       .click('@tabletportraitbtn') 
       this.verify.elementPresent('.ui-wrapper.auto-width.current[title="Hide On Tablet Portrait"] .btn')
  }
};

module.exports = {
  commands: [tabletportraitbtnCommands],
  elements: {
   tabletportraitbtn : {
    	selector: '[title="Hide On Tablet Portrait"] .btn'
    }
  }
};

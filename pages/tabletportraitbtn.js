var tabletportraitbtnCommands = {
  tabletportraitbtn: function() {
    this.verify.elementPresent('@tabletportraitbtn')
       .click('@tabletportraitbtn') 
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

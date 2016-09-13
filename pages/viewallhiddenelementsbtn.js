var viewallhiddenelementsbtnCommands = {
  viewallhiddenelementsbtn: function() {
    this.verify.elementPresent('@viewallhiddenelementsbtn')
       .click('@viewallhiddenelementsbtn') 
       this.verify.elementPresent('.ui-wrapper.auto-width.current[title="View All Hidden Elements"] .btn')
  }
};

module.exports = {
  commands: [viewallhiddenelementsbtnCommands],
  elements: {
   viewallhiddenelementsbtn : {
    	selector: '[title="View All Hidden Elements"] .btn'
    }
  }
};

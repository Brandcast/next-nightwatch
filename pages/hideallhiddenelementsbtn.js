var viewallhiddenelementsbtnCommands = {
  viewallhiddenelementsbtn: function() {
    this.verify.elementPresent('.ui-wrapper.auto-width.current[title="View All Hidden Elements"]')
       .click('@viewallhiddenelementsbtn') 
       this.verify.elementPresent('.ui-wrapper.auto-width[title="View All Hidden Elements"]')
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

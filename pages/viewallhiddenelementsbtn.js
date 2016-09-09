var viewallhiddenelementsbtnCommands = {
  viewallhiddenelementsbtn: function() {
    this.verify.elementPresent('@viewallhiddenelementsbtn')
       .click('@viewallhiddenelementsbtn') 
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

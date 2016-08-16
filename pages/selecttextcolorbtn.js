var selecttextcolorbtnCommands = {
  selecttextcolorbtn: function() {
    this.verify.elementPresent('@textcolorbtn')
       .click('@textcolorbtn')
       //.expect.element('[title="Text Color"]').to.be.selected   

  }
};

module.exports = {
  commands: [selecttextcolorbtnCommands],
  elements: {
   textcolorbtn : {
    	selector: '[title="Text Color"] .btn'
    }
  }
};

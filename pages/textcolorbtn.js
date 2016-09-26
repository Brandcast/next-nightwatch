var selecttextcolorbtnCommands = {
  selecttextcolorbtn: function() {
    this.verify.elementPresent('@textcolorbtn')
       .click('@textcolorbtn')
       .expect.element('@textcolorbtn').to.be.enabled  

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

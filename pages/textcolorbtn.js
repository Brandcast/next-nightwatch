var textcolorbtnCommands = {
  textcolorbtn: function() {
    this.verify.elementPresent('@textcolorbtn')
       .click('@textcolorbtn')
       .expect.element('@textcolorbtn').to.be.enabled  

  }
};

module.exports = {
  commands: [textcolorbtnCommands],
  elements: {
   textcolorbtn : {
    	selector: '[title="Text Color"] .btn'
    }
  }
};

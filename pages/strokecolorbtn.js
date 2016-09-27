var strokecolorbtnCommands = {
  strokecolorbtn: function() {
    this.verify.elementPresent('@strokecolorbtn')
       .click('@strokecolorbtn')
        .expect.element('@strokecolorbtn').to.be.enabled
  }
};

module.exports = {
  commands: [strokecolorbtnCommands],
  elements: {
   strokecolorbtn : {
    	selector: '[title="Stroke Color"] .btn'
    }
  }
};

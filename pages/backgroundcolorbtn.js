var selectbackgroundcolorbtnCommands = {
  selectbackgroundcolorbtn: function() {
    this.verify.elementPresent('@fillcolorbtn')
       .click('@fillcolorbtn')
        .expect.element('@fillcolorbtn').to.be.enabled
        

  }
};

module.exports = {
  commands: [selectbackgroundcolorbtnCommands],
  elements: {
   fillcolorbtn : {
    	selector: '[title="Fill Color"] .btn'
    }
  }
};

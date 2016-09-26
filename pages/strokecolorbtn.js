var selectstrokecolorbtnCommands = {
  selectstrokecolorbtn: function() {
    this.verify.elementPresent('@strokecolorbtn')
       .click('@strokecolorbtn')
        .expect.element('@strokecolorbtn').to.be.enabled
  }
};

module.exports = {
  commands: [selectstrokecolorbtnCommands],
  elements: {
   strokecolorbtn : {
    	selector: '[title="Stroke Color"] .btn'
    }
  }
};

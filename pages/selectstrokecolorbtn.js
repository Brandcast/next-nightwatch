var selectstrokecolorbtnCommands = {
  selectstrokecolorbtn: function() {
    this.verify.elementPresent('@strokecolorbtn')
       .click('@strokecolorbtn')
       .expect.element('.ui-wrapper size18 right current[title="Stroke Color"] .btn').to.be.selected
       //browser.waitForElementVisible('@opacityslider', 1000);
        

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

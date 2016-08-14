var selecttextcolorbtnCommands = {
  selecttextcolorbtn: function() {
    this.verify.elementPresent('@textcolorbtn')
       .click('@textcolorbtn')
       .expect.element('.ui-wrapper size18 right current[title="Text Color"] .btn').to.be.selected
       //browser.waitForElementVisible('@opacityslider', 1000);
        

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

var selectbackgroundcolorbtnCommands = {
  selectbackgroundcolorbtn: function() {
    this.verify.elementPresent('@fillbtn')
       .click('@fillbtn')
       .expect.element('.ui-wrapper size18 right current[title="Fill Color"] .btn').to.be.selected
       //browser.waitForElementVisible('@opacityslider', 1000);
        

  }
};

module.exports = {
  commands: [selectbackgroundcolorbtnCommands],
  elements: {
   fillbtn : {
    	selector: '[title="Fill Color"] .btn'
    }
  }
};

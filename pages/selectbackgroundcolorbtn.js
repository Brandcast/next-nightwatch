var selectbackgroundcolorbtnCommands = {
  selectbackgroundcolorbtn: function() {
    this.verify.elementPresent('@fillbtn')
       .click('@fillbtn')
       .expect.element('[title="Fill Color"]').to.be.selected
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

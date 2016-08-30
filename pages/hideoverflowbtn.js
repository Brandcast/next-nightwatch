var hideoverflowbtnCommands = {
  hideoverflowbtn: function() {
    this.verify.elementPresent('@hideoverflowbtn')
       .click('@hideoverflowbtn') 
  }
};

module.exports = {
  commands: [hideoverflowbtnCommands],
  elements: {
   hideoverflowbtn : {
    	selector: '[title="Hide Overflow"]'
    }
  }
};

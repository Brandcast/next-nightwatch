var cleartransformsbtnCommands = {
  cleartransformsbtn: function() {
    this.verify.elementPresent('@cleartransformsbtn')
       .click('@cleartransformsbtn') 
  }
};

module.exports = {
  commands: [cleartransformsbtnCommands],
  elements: {
   cleartransformsbtn : {
    	selector: '[data-qa-id="clear-all-transforms"]'
    }
  }
};

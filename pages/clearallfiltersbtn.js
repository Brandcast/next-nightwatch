var clearallfiltersbtnCommands = {
  clearallfiltersbtn: function() {
    this.verify.elementPresent('@clearallfiltersbtn')
       .click('@clearallfiltersbtn') 
  }
};

module.exports = {
  commands: [clearallfiltersbtnCommands],
  elements: {
   clearallfiltersbtn : {
    	selector: '.btn-text-label["Clear All Filters"]'
    }
  }
};

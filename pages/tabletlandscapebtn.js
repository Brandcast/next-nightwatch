var tabletlandscapebtnCommands = {
  tabletlandscapebtn: function() {
    this.verify.elementPresent('@tabletlandscapebtn')
       .click('@tabletlandscapebtn') 
  }
};

module.exports = {
  commands: [tabletlandscapebtnCommands],
  elements: {
   tabletlandscapebtn : {
    	selector: '[title="Hide On Tablet Landscape"] .btn'
    }
  }
};

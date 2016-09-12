var tabletlandscapebtnCommands = {
  tabletlandscapebtn: function() {
    this.verify.elementPresent('@tabletlandscapebtn')
       .click('@tabletlandscapebtn')
       .verify.elementPresent('.ui-wrapper.auto-width.current[title="Hide On Tablet Landscape"] .btn')
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

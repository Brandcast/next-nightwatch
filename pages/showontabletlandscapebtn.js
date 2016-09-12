var showontabletlandscapebtnCommands = {
  showontabletlandscapebtn: function() {
    this.verify.elementPresent('.ui-wrapper.auto-width.current[title="Hide On Tablet Landscape"] .btn')
       .click('@tabletlandscapebtn')
       .verify.elementPresent('.ui-wrapper.auto-width[title="Hide On Tablet Landscape"] .btn')
  }
};

module.exports = {
  commands: [showontabletlandscapebtnCommands],
  elements: {
   tabletlandscapebtn : {
    	selector: '[title="Hide On Tablet Landscape"] .btn'
    }
  }
};

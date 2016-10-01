var fontstextformattingCommands = {
  addnewfont: function() {
    this.verify.elementPresent('@addnewfontbtn')
       .click('@addnewfontbtn') 
       //this.verify.elementPresent('.ui-wrapper.auto-width.current[title="Hide On Phone"] .btn')
  },
  // showaddnewfontbtn: function() {
  //   this.verify.elementPresent('@addnewfontbtn')
  //      .click('@addnewfontbtn') 
  //      this.verify.elementPresent('.ui-wrapper.auto-width[title="Hide On Phone"] .btn')
  // }
};

module.exports = {
  commands: [fontstextformattingCommands],
  elements: {
   addnewfontbtn : {
    	selector: '[title="Add More Fonts to Website"] .btn-text'
    }
  }
};

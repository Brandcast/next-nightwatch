var selecttextcomponentCommands = {
  textcomponent: function() {
      this.frame(0) //selects iframe - must call to select anything within iframe
          .waitForElementVisible('@textcomponent', 1000)
          .click('@textcomponent')
          .frame(null) //closes iframe

  }
};

module.exports = {
  commands: [selecttextcomponentCommands],
  elements: {
   textcomponent : {
    	selector: '[data-qa-id="/grid/column/text]'
    }
  }
};

var globalstylesbtnCommands = {
 globalstylesbtn: function() {
    this.verify.elementPresent('@globalstylesbtn')
      .moveToElement('@globalstylesbtn', 2, 2)
      this.api.mouseButtonClick()
  }
};

module.exports = {
  commands: [globalstylesbtnCommands],
  elements: {
    globalstylesbtn: {
    	selector: '[data-qa-id="Global Styles"]'
    }
  }
};

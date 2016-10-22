var textdndCommands = {
  textdnd: function() {
    this.verify.elementPresent('[title="Text"] .btn')
      this.api.moveToElement('[title="Text"] .btn', 2, 2)
      this.api.mouseButtonDown(0)
      this.api.frame(0) //selects iframe - must call to select anything within iframe
      this.verify.elementPresent('.drop-zone')
      this.api.moveToElement('.drop-zone', 300, 900)
      this.api.mouseButtonUp(0)
      this.api.frame(null) //closes iframe

    //this.verify.elementPresent('[data-qa-id="/text3"]')
  }
};

module.exports = {
  commands: [textdndCommands],
  elements: {
    text: {
    	selector:'[title="Text"] .btn'
    }
  }
};

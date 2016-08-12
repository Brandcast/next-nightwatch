var opensiteCommands = {
  opensite: function() {
      this.api.frame('iframe') //selects iframe - must call to select anything within iframe
        .waitForElementVisible('iframe', 1000)
        .moveToElement('iframe', 25, 25)
        .doubleClick()
        .frame(null) 

    //this.api.pause(500)
      //.verify.elementPresent('iframe')
      //this.api.frame(0)
      //this.moveToElement('.page-item-preview', 1, 1)
      //this.api.doubleClick()
      //.verify.elementPresent('iframe')
       //.verify.elementPresent('.tab')
  }
};

module.exports = {
  commands: [opensiteCommands],
  elements: {
    site: {
    	selector: '.page-item-preview'
    }
  }
};

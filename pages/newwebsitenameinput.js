var newwebsitenameinputCommands = {
  newwebsitenameinput: function() {
    this.verify.elementPresent('@newwebsitenameinput')
       .click('@newwebsitenameinput') 
    this.expect.element('@newwebsitenameinput').to.be.selected
  },
};

module.exports = {
  commands: [newwebsitenameinputCommands],
  elements: {
   newwebsitenameinput : {
    	selector: '.text-input [name="websiteName"]'
    }
  }
};

var newwebsitesubdomaininputCommands = {
  newwebsitesubdomaininput: function() {
    this.verify.elementPresent('@newwebsitesubdomaininput')
       .click('@newwebsitesubdomaininput') 
    this.expect.element('@newwebsitesubdomaininput').to.be.selected
  },
};

module.exports = {
  commands: [newwebsitesubdomaininputCommands],
  elements: {
   newwebsitesubdomaininput : {
    	selector: '.text-input [name="subdomainName"]'
    }
  }
};

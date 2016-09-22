var newwebsitesubdomaininputCommands = {
  newwebsitesubdomaininput: function() {
    this.verify.elementPresent('@newwebsitesubdomaininput')
       .click('@newwebsitesubdomaininput') 
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

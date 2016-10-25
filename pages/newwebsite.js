var newwebsiteCommands = {
  newwebsitebtn: function() {
    this.assert.elementPresent('[data-qa-id="new-website-button"]')
        this.api.click('[data-qa-id="new-website-button"]')

       this.verify.containsText('.overlay-label.drag-handle', 'New Website')
  },

    newwebsitenameinput: function() {
      this.verify.elementPresent('@newwebsitenameinput')
       .click('[title="Website Name"] input[type=text]') 
  },

    newwebsitesubdomaininput: function() {
      this.verify.elementPresent('@newwebsitesubdomaininput')
       .click('@newwebsitesubdomaininput') 
  },

    createwebsitebtn: function() {
      this.assert.elementPresent('[data-qa-id="create-website-button"]')
        this.api.click('[data-qa-id="create-website-button"]')
  },

    cancelbtn: function() {
     this.assert.elementPresent('[data-qa-id="cancel-button"]')
        this.api.click('[data-qa-id="cancel-button"]')

       this.verify.elementNotPresent('.window-area-wrapper.welcome-screen')
  },

    closebtn: function() {
     this.assert.elementPresent('.panel-close')
        this.api.click('.panel-close')

       this.verify.elementNotPresent('.window-area-wrapper.welcome-screen')
  },
};


module.exports = {
  commands: [newwebsiteCommands],
 elements: {
    newwebsitebtn: {
    	selector: '[data-qa-id="new-website-button"]'
    },
    newwebsitenameinput : {
      selector: '[title="Website Name"] input[type=text]'
    },
    newwebsitesubdomaininput : {
      selector: '[name="subdomainName"] input[type=text]'
    },
  }
};

var gridbtnCommands = {
  gridbtn: function() {
    this.verify.elementPresent('@gridbtn')
       .click('@gridbtn')
        .expect.element('@gridbtn').to.be.enabled

        this.api.frame(0)
          .verify.elementPresent('.bc-grid-container.bc-grid-wrapper')
            .frame(null)
  }
};

module.exports = {
  commands: [gridbtnCommands],
  elements: {
   gridbtn : {
    	selector: '.btn-sudo-dom-label[title="grid"]'
    }
  }
};

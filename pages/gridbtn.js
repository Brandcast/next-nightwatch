var gridbtnCommands = {
  gridbtn: function() {
    this.verify.elementPresent('@gridbtn')
       .click('@gridbtn')
        .expect.element('@gridbtn').to.be.enabled
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

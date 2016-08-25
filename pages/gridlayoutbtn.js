var gridlayoutbtnCommands = {
  gridlayoutbtn: function() {
    this.verify.elementPresent('@gridlayoutbtn')
       .click('@gridlayoutbtn')
        .expect.element('@gridlayoutbtn').to.be.enabled

        this.api.frame(0)
          .verify.elementPresent('.focused.bc-grid-wrapper')
            .frame(null)
  }
};

module.exports = {
  commands: [gridlayoutbtnCommands],
  elements: {
   gridlayoutbtn : {
    	selector: '.btn-sudo-dom-label[title="grid"]'
    }
  }
};

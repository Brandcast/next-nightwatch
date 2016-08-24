var textlayoutbtnCommands = {
  textlayoutbtn: function() {
    this.verify.elementPresent('@textlayoutbtn')
       .click('@textlayoutbtn')
        .expect.element('@textlayoutbtn').to.be.enabled

        this.api.frame(0)
          .verify.elementNotPresent('.focused.bc-grid-wrapper')
            .frame(null)
  }
};

module.exports = {
  commands: [textlayoutbtnCommands],
  elements: {
   textlayoutbtn : {
    	selector: '.btn-sudo-dom-label[title="text"]'
    }
  }
};
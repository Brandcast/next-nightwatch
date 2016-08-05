var opencolorpanelCommands = {
  opencolorpanel: function() {
    this.verify.elementPresent('@colorpanelbtn')
      .click('div.btn[title="Color"]')
      .verify.elementPresent('.overlay-label', "Color");
  }
};

module.exports = {
  commands: [opencolorpanelCommands],
  elements: {
    colorpanelbtn: {
    	selector: 'div.btn[title="Color"]'
    }
  }
};

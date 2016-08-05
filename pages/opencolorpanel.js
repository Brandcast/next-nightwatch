var opencolorpanelCommands = {
  opencolorpanel: function() {
    this.verify.elementPresent('@site')
      .moveToElement('@site', 1, 1);
    
    this.api.doubleClick()
       .verify.elementPresent('.tab.selected')
       .verify.elementPresent('.tab')
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

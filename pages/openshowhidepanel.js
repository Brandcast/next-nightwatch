var openshowhidepanelCommands = {
  openshowhidepanel: function() {
    this.verify.elementPresent('@showhidepanelbtn')
      .click('div.btn[title="Show or Hide"]')
      .verify.elementPresent('.overlay-label', "ShowHide");
  }
};

module.exports = {
  commands: [openshowhidepanelCommands],
  elements: {
    showhidepanelbtn: {
    	selector: 'div.btn[title="Show or Hide"]'
    }
  }
};

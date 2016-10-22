var pagestructurepanelCommands = {
  openpagestructurepanel: function() {
    this.verify.elementPresent('@pagestructurepanelbtn')
      .click('div.ui-wrapper[title="Page Structure"]')
      .verify.containsText('.overlay-label.drag-handle', 'Page Structure')
  }
};

module.exports = {
  commands: [pagestructurepanelCommands],
  elements: {
    pagestructurepanelbtn: {
    	selector: 'div.ui-wrapper[title="Page Structure"]'
    }
  }
};

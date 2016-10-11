var alignmentpanelCommands = {
  openalignmentpanel: function() {
    this.verify.elementPresent('@alignmentpanelbtn')
      .click('@alignmentpanelbtn')
      .verify.containsText('.overlay-label.drag-handle', 'Alignment')
  },

  leftalignenabled: function() {
    this.verify.elementPresent('@leftalignbtn')
      .click('@leftalignbtn')
      .verify.elementPresent('.ui-wrapper.current[title="Align Left"]')
  },

  centeralignenabled: function() {
    this.verify.elementPresent('@centeralignbtn')
      .click('@centeralignbtn')
      .verify.elementPresent('.ui-wrapper.current[title="Align Center"]')
  },

  rightalignenabled: function() {
    this.verify.elementPresent('@rightalignbtn')
      .click('@rightalignbtn')
      .verify.elementPresent('.ui-wrapper.current[title="Align Right"]')
  },
};

module.exports = {
  commands: [alignmentpanelCommands],
  elements: {
    alignmentpanelbtn: {
      selector: 'div.ui-wrapper[title="Alignment"]'
    },

    leftalignbtn: {
    	selector: '[title="Align Left"]'
    },

    centeralignbtn: {
      selector: '[title="Align Center"]'
    },

    rightalignbtn: {
      selector: '[title="Align Right"]'
    },
  }
};

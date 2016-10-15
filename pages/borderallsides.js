var borderallsidesCommands = {
 borderallsidesbtnenabled: function() {
    this.verify.elementPresent('@foursidedborderbtn')
      .click('@foursidedborderbtn')
      this.verify.elementPresent('.ui-wrapper.current[title="Apply Stroke to All Sides"]')
  },

  borderallsidesbtndisabled: function() {
    this.verify.elementPresent('@foursidedborderbtn')
      .click('@foursidedborderbtn')
      this.verify.elementPresent('.ui-wrapper[title="Apply Stroke to All Sides"]')
  }
};

module.exports = {
commands: [borderallsidesCommands],
  elements: {
    foursidedborderbtn: {
    	selector: '[data-qa-id="apply-stroke-to-all-sides"]'
    }
  }
};

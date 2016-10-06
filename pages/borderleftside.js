var borderleftsideCommands = {
 borderleftsidebtnenabled: function() {
    this.verify.elementPresent('@borderleftsidebtn')
      .click('@borderleftsidebtn')
      this.api.pause(300)
      this.verify.elementPresent('.ui-wrapper.current[title="Apply Stroke to Left"')
  },

  borderleftsidebtndisabled: function() {
    this.verify.elementPresent('@borderleftsidebtn')
      .click('@borderleftsidebtn')
      this.verify.elementPresent('.ui-wrapper[title="Apply Stroke to Left"')
  },
};

module.exports = {
commands: [borderleftsideCommands],
  elements: {
    borderleftsidebtn: {
    	selector: '[title="Apply Stroke to Left"]'
    },
  }
};

var borderrightside = {
 borderrightsidebtnenabled: function() {
    this.verify.elementPresent('@borderrightsidebtn')
      .click('@borderrightsidebtn')
      this.verify.elementPresent('.ui-wrapper current [title="Apply Stroke to Right"')
  },

  borderallsidesbtndisabled: function() {
    this.verify.elementPresent('@borderrightsidebtn')
      .click('@borderrightsidebtn')
      this.verify.elementPresent('.ui-wrapper [title="Apply Stroke to Right"')
  }
};

module.exports = {
  commands: [borderrightsideCommands],
  elements: {
    borderrightsidebtn: {
    	selector: '[title="Apply Stroke to Right"]'
    }
  }
};

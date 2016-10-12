var transformpanelCommands = {
  opentransformpanel: function() {
    this.verify.elementPresent('@transformpanelbtn')
      .click('div.ui-wrapper[title="Transform"]')
      .verify.containsText('.overlay-label.drag-handle', 'Transform')
  },

  translatexinput: function() {
    this.verify.elementPresent('[data-qa-id="translate-x-input"]')
       .click('[data-qa-id="translate-x-input"]')
       .waitForElementVisible('[title="Translate X"] input[type="range"]', 1000);    
  },

  translateyinput: function() {
    this.verify.elementPresent('[data-qa-id="translate-y-input"]')
       .click('[data-qa-id="translate-y-input"]')
       .waitForElementVisible('[title="Translate Y"] input[type="range"]', 1000);
  }
};

module.exports = {
  commands: [transformpanelCommands],
  elements: {
    transformpanelbtn: {
    	selector: 'div.ui-wrapper[title="Transform"]'
    }
  }
};

var grayscalesliderCommands = {
  grayscaleslider: function() {
    this.verify.elementPresent('.ui-wrapper[title="Grayscale"]')
       .click('.ui-wrapper[title="Grayscale"] .select-input-container')
       .waitForElementVisible('.ui-wrapper[title="Grayscale"] input[type=range]', 1000);
        

  }
};

module.exports = {
  commands: [grayscalesliderCommands],
  elements: {
    grayscaleslider: {
    	selector: '.ui-wrapper[title="Grayscale"] input[type=range]'
    }
  }
};

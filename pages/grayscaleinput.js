var grayscaleinputCommands = {
 grayscaleinput: function() {
    this.verify.elementPresent('.ui-wrapper[title="Grayscale"]')
       .click('.ui-wrapper[title="Grayscale"] .select-input-container')
       .waitForElementVisible('.ui-wrapper[title="Grayscale"] input[type="range"]', 1000);
      
  }
};

module.exports = {
  commands: [grayscaleinputCommands],
  elements: {
    grayscaleslider: {
    	selector: '.ui-wrapper[title="Grayscale"] input[type="range"]'
    }
  }
};

var grayscaleinputCommands = {
 grayscaleinput: function() {
    this.verify.elementPresent('.ui-wrapper[title="Grayscale"]')
       .click('[data-automation-id="opacity-slider"]', 1000);
        

  }
};

module.exports = {
  commands: [grayscaleinputCommands],
  elements: {
    grayscaleslider: {
    	selector: '.ui-wrapper[title="Grayscale"] input[type=range]'
    }
  }
};

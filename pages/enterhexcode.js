var enterhexcodeCommands = {
  enterhexcode: function() {
      this.verify.elementPresent('.color-hex-container')
        .click('@hexcodeinput')
        .clearValue('.color-hex-container input[type=text]')
  }
};

module.exports = {
  commands: [enterhexcodeCommands],
  elements: {
    hexcodeinput: {
    	selector: '.color-hex-input-wrapper'
    }
  }
};

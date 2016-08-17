var enterhexcodeCommands = {
  enterhexcode: function() {
      this.verify.elementPresent('.color-hex-container')
        .click('@hexcodeinput')
        .clearValue('input[type=text]')
        this.setValue('input[type=text]', ['#7fff00','\uE007']) 
        .verify.valueContains('input[type=text]', '#7fff00') 

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

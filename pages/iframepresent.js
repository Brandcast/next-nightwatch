var iframepresentCommands = {
  iframepresent: function() {
    this.verify.elementPresent('@iframe');
  }
};

module.exports = {
  commands: [iframepresentCommands],
  elements: {
    iframe: {
    	selector: 'iframe'
    }
  }
};

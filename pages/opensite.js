var opensiteCommands = {
  opensite: function() {
    this.verify.elementPresent('@site')
      .moveToElement('@site', 1, 1);
    
    this.api.doubleClick();
  }
};

module.exports = {
  commands: [opensiteCommands],
  elements: {
    site: {
    	selector: 'h5'
    }
  }
};

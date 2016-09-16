var devicemodeglobalstylesCommands = {
  devicemodeglobalstyles: function() {
    this.verify.elementPresent('.bc-menu-group.right [title="Device Mode"] .btn')
       .click('.bc-menu-group.right [title="Device Mode"] .btn') 
    this.verify.elementPresent('.menu-dropdown.devices')
  },
};

module.exports = {
  commands: [devicemodeglobalstylesCommands],
  elements: {
   devicemodebtn : {
    	selector: '.bc-menu-group.right [title="Device Mode"] .btn'
    }
  }
};

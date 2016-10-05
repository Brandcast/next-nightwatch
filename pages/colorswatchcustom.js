var colorswatchcustomCommands = {
  addswatch: function() {
        this.verify.elementPresent('.ui-wrapper.size18[title="Add Swatch"] .btn')
        .click('.ui-wrapper.size18[title="Add Swatch"] .btn')
        this.verify.elementPresent('.swatch.selected')
  },

  duplicateswatch: function() {
        this.verify.elementPresent('.swatch.selected')
        .click('.ui-wrapper.size18[title="Duplicate Swatch"] .btn')
        // this.verify.elementNotPresent('.swatch.selected')
 },
  
  deleteswatch: function() {
        this.verify.elementPresent('.swatch.selected')
        .click('.ui-wrapper.size18[title="Delete Swatch"] .btn')
        // this.verify.elementNotPresent('.swatch.selected')
 },
};

module.exports = {
  commands: [colorswatchcustomCommands],
  elements: {
    addswatchbtn: {
    	selector: '.ui-wrapper.size18[title="Add Swatch"] .btn'
    },
   deleteswatchbtn: {
      selector: '.ui-wrapper.size18[title="Delete Swatch"] .btn'
    }, 
  }
};

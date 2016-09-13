var newwebsitebtnCommands = {
  newwebsitebtn: function() {
    this.api.resizeWindow(1050,1250)

    this.verify.elementPresent('@newwebsitebtn')
    .moveToElement('@newwebsitebtn', 2, 2);

    this.api.mouseButtonClick()
    this.verify.elementPresent('.ruler')
  },
};


module.exports = {
  commands: [newwebsitebtnCommands],
 elements: {
    newwebsitebtn: {
    	selector: '.btn-text-label'
    }
  }
};

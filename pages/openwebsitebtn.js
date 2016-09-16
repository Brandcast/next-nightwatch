var openwebsitebtnCommands = {
  openwebsitebtn: function() {
    this.api.resizeWindow(1050,1250)

    this.assert.elementPresent('[data-qa-id="open-website-button"]')
    .moveToElement('[data-qa-id="open-website-button"]', 2, 2);

    this.api.mouseButtonClick();

    this.verify.containsText('.overlay-label.drag-handle', 'New Website')
  },
};


module.exports = {
  commands: [openwebsitebtnCommands],
 elements: {
    newwebsitebtn: {
    	selector: '.btn-text-label [data-qa-id="open-website-button"]'
    }
  }
};

var openwebsitebtnCommands = {
  openwebsitebtn: function() {
    this.assert.elementPresent('[data-qa-id="open-website-button"]')
    this.click('[data-qa-id="open-website-button"]')


    this.verify.containsText('.overlay-label.drag-handle', 'Open Website')
  },
};


module.exports = {
  commands: [openwebsitebtnCommands],
 elements: {
    openwebsitebtn: {
    	selector: '.btn-text [data-qa-id="open-website-button"]'
    }
  }
};

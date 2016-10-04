var medialibrarybtnCommands = {
 medialibrarybtn: function() {
    this.verify.elementPresent('@medialibrarybtn')
      .moveToElement('@medialibrarybtn', 2, 2)
      this.api.mouseButtonClick()

    .verify.containsText('.overlay-label.drag-handle', 'Media Library')
  }
};

module.exports = {
  commands: [medialibrarybtnCommands],
  elements: {
    medialibrarybtn: {
    	selector: 'btn-text-label'
    }
  }
};

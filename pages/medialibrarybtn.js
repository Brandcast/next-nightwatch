var medialibrarybtnCommands = {
 openmedialibrary: function() {
    this.verify.elementPresent('@medialibrarybtn')
      .click('@medialibrarybtn')
      this.api.pause(500)

    this.assert.visible('.media-library-container')
  },

  closemedialibrary: function() {
    this.verify.elementPresent('.media-library-container')
      this.api.click('.ui-wrapper.card-close-container[title="Close"] .btn')
      this.api.pause(500)
      
      .assert.elementNotPresent('.media-library-container')
  },
};

module.exports = {
  commands: [medialibrarybtnCommands],
  elements: {
    medialibrarybtn: {
    	selector: '[data-qa-id="media-library-button"]'
    }
  }
};

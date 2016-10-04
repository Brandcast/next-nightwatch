var medialibrarybtnCommands = {
 openmedialibrary: function() {
    this.verify.elementPresent('@medialibrarybtn')
      .click('@medialibrarybtn')

    this.assert.visible('.media-library-container')
  // },

  // closemedialibrary: function() {
  //   this.verify.elementPresent('.media-library-container')
  //     this.api.click('.ui-wrapper.card-close-container [title="Close"] .btn')
      
      //.expect.element('.media-library-container').to.not.be.visible
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

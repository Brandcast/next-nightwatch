var imagedndCommands = {
 imagednd: function() {
    this.verify.elementPresent('@image')
      .moveToElement('@image', 1, 1)
      .mouseButtonDown(0)
      .moveToElement('.drop-zone', 4, 4)
      .mouseButtonUp(0)

    this.verify.elementPresent('[data-qa-id="/image4"]')
  }
};

module.exports = {
  commands: [sitewidthsliderCommands],
  elements: {
    image: {
    	selector:'[title="Image"] .btn'
    }
  }
};

var sitewidthsliderCommands = {
  sitewidthslider: function() {
    this.verify.elementPresent('@sitewidthslider')
      .moveToElement('@sitewidthslider', 80, 4)
      .mouseButtonDown(0)
      .moveToElement('@sitewidthslider', 15, 4)
      .mouseButtonUp(0)
  }
};

module.exports = {
  commands: [sitewidthsliderCommands],
  elements: {
    sitewidthslider: {
    	selector:'[id="slider1"]'
    }
  }
};

var RGBsliderCommands = {
  redslider: function() {
    this.waitforElementVisible('.ui-wrapper.full-width[title="Red"] .slider-wrapper input[type=range]', 1000)
  },
  greenslider: function() {
    this.waitforElementVisible('.ui-wrapper.full-width[title="Green"] .slider-wrapper input[type=range]', 1000)
  },
  blueslider: function() {
    this.waitforElementVisible('.ui-wrapper.full-width[title="Blue"] .slider-wrapper input[type=range]', 1000)
  },
};

module.exports = {
  commands: [RGBsliderCommands],
  elements: {
    redslider: {
      selector: '.ui-wrapper.full-width[title="Red"] .slider-wrapper input[type=range]'
    },
    greenslider: {
    	selector: '.ui-wrapper.full-width[title="Green"] .slider-wrapper input[type=range]'
    }
    blueslider: {
      selector: '.ui-wrapper.full-width[title="Blue"] .slider-wrapper input[type=range]'
    }
  }
};

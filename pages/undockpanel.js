var undockpanelCommands = {
 undockpanel : function() {
    this.verify.elementPresent('.panel.direction-left.direction-down.react-draggable')
      .verify.elementPresent('@panelheader')
      .moveToElement('@panelheader', 2, 2)
      this.api.mouseButtonDown(0)
      .moveToElement('.overlays-wrapper', 150, 45)
      .mouseButtonUp(0)
      this.verify.elementPresent('.panel.direction-left.direction-down.react-draggable.react-draggable-dragged')
  }
};

module.exports = {
  commands: [undockpanelCommands],
  elements: {
    panelheader: {
    	selector:'.overlay-label.drag-handle'
    }
  }
};

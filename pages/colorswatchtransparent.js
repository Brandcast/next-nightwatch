var colorswatchtransparentCommands = {
  colorswatchtransparent: function() {
        this.verify.elementPresent('@swatchtransparent')
        this.api.moveToElement('.swatch[title="No Color"]', 2,2)
        this.api.mouseButtonClick('@swatchtransparent')
        this.api.pause(300)
        this.verify.elementPresent('.swatch.selected[title="No Color"]')
  }
};

module.exports = {
  commands: [colorswatchtransparentCommands],
  elements: {
    swatchtransparent: {
    	selector: '.swatch[title="No Color"]'
    }
  }
};

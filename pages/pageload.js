var pageloadCommands = {
  pageload: function() {
    this.api.resizeWindow(1050,1250)
    this.waitForElementVisible('@pageload', 3000)
  }
};

module.exports = {
  commands: [pageloadCommands],
  url: 'http://localhost:8080/',
  elements: {
    pageload: {
    	selector: 'body'
    }
  }
};

var pageloadCommands = {
  pageload: function() {
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

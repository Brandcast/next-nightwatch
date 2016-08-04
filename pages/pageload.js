var pageloadCommands = {
  pageload: function() {
    this.waitForElementVisible('@sitelist', 1000)
  }
};

module.exports = {
  commands: [pageloadCommands],
  url: 'http://localhost:8080/',
  elements: {
    sitelist: {
    	selector: 'body'
    }
  }
};

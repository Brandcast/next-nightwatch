var opensitemapCommands = {
  opensitemap: function() {
    this.verify.elementPresent('.website-tile-container')

    this.waitForElementVisible('[data-qa-id="page-item-preview"]', 5000)
    .moveToElement('[data-qa-id="page-item-preview"]', 2, 2);

     this.api.doubleClick(); 
  },
};


module.exports = {
  commands: [opensitemapCommands],
 elements: {
    opensitemap: {
    	selector: '.btn-text-label'
    }
  }
};

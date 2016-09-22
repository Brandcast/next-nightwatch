var opensitemapCommands = {
  opensitemap: function() {
    this.verify.elementPresent('.website-tile-container')

  this.api.frame(0) //selects iframe - must call to select anything within iframe       
    this.waitForElementVisible('[data-qa-id="page-item-preview"]', 5000)
        .moveToElement('[data-qa-id="page-item-preview"]', 2, 2);
        this.api.doubleClick(); 
  this.api.frame(null) //closes iframe
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

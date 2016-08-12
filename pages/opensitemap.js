var opensitemapCommands = {
  opensitemap: function() {
    this.verify.elementPresent('@newwebsitebtn')
        this.api.click('.btn-text-label')
                .pause(500)
                .verify.elementPresent('.site-map-container')
       //.waitforElementVisible('.site-map-container', 1000)         
  },
};

module.exports = {
  commands: [opensitemapCommands],
  elements: {
    newwebsitebtn: {
    	selector: '.btn-text-label'
    }
  }
};

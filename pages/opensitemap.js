var opensitemapCommands = {
  opensitemap: function() {
    this.api.resizeWindow(1050,1250)

    this.verify.elementPresent('[data-automation-id="open-website-button"]')
    .moveToElement('[data-automation-id="open-website-button"]', 2, 2);

    this.api.mouseButtonClick()
    this.verify.elementPresent('.ruler')
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

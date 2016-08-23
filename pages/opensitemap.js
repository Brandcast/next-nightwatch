var opensitemapCommands = {
  opensitemap: function() {
        this.api.resizeWindow(1050,1250)
        .pause(500)
        //.moveToElement('.welcome-screen', 400,555)
        .moveToElement('.welcome-screen', 400,355)
        .mouseButtonClick()
        .pause(300)
        .verify.elementPresent('iframe')


    //this.verify.elementPresent('@newwebsitebtn')
      //  this.api.click('.btn-text-label')
        //        .pause(500)
          //      .verify.elementPresent('.site-map-container')
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

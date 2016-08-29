var opensitemapCommands = {
  opensitemap: function() {
        this.api.resizeWindow(1050,1250)
        .pause(500)
        this.verify.elementPresent('.open-fail-test')
        //.moveToElement('.container-clear', 400,555)
        //.moveToElement('.container-clear', 400,355)
        .mouseButtonClick('.open-fail-test')
        //this.verify.elementPresent('.ruler')
      },
    };

    //this.verify.elementPresent('@newwebsitebtn')
      //  this.api.click('.btn-text-label')
        //        .pause(500)
          //      .verify.elementPresent('.site-map-container')
       //.waitforElementVisible('.site-map-container', 1000)         
  //},
//};

module.exports = {
  commands: [opensitemapCommands],
 elements: {
    newwebsitebtn: {
    	selector: '.btn-text-label'
    }
  }
};

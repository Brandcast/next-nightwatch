var opensiteCommands = {
 opensite: function() {
    this.waitForElementVisible('[data-qa-id="page-item-preview"]', 1000)
       .moveToElement('@site', 25, 25)
       this.api.doubleClick();

    //    this.api.pause(1000);

    // this.api.waitforElementPresent('[data-qa-id="page-item-preview"]', 2000)
    //    this.moveToElement('.page-status-container [data-qa-id="page-item-preview"]', 5, 5)
    //    this.api.doubleClick();
 }
};
module.exports = {
 commands: [opensiteCommands],
 elements: {
 site: {
  	selector: '[data-qa-id="page-item-preview"]'
   }
 }
 };

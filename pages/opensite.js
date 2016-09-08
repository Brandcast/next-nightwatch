var opensiteCommands = {
 opensite: function() {
    this.waitForElementVisible('[data-qa-id="page-item-preview"]', 1000)
       .moveToElement('@site', 25, 25)
       this.api.doubleClick();

    this.waitForElementVisible('[data-qa-id="page-item-preview"]', 1000)
       .moveToElement('@site', 25, 25)
       this.api.doubleClick();
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

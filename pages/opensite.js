var opensiteCommands = {
 opensite: function() {
    this.waitForElementVisible('[data-qa-id="page-item-preview"]', 10000)
       .moveToElement('[data-qa-id="page-item-preview"]', 50, 20)
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

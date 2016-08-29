//var opensiteCommands = {
  //opensite: function() {
      //this.api.frame('iframe') //selects iframe - must call to select anything within iframe
        //.waitForElementVisible('iframe', 1000)
  //}
//};
var opensiteCommands = {
 opensite: function() {
     this.api.frame('iframe') //selects iframe - must call to select anything within iframe
       this.waitForElementVisible('iframe', 1000)
       .moveToElement('@site', 25, 25)
       this.api.doubleClick()
       .frame(null) 
      
     this.api.frame('iframe') //selects iframe - must call to select anything within iframe
       this.waitForElementVisible('@site', 1000)
       .moveToElement('@site', 25, 25)
       this.api.doubleClick()
       .frame(null) 
 }
};
module.exports = {
 commands: [opensiteCommands],
 elements: {
 site: {
  	selector: '.page-preview-mode'
   }
 }
 };

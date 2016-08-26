var opensiteCommands = {
  opensite: function() {
      this.api.frame('iframe') //selects iframe - must call to select anything within iframe
        .waitForElementVisible('iframe', 1000)
  }
};
//var opensiteCommands = {
  //opensite: function() {
      //this.api.frame('iframe') //selects iframe - must call to select anything within iframe
        //.waitForElementVisible('iframe', 1000)
        //.moveToElement('iframe', 25, 25)
        //.doubleClick()
        //.frame(null) 
      
      //this.api.frame('iframe') //selects iframe - must call to select anything within iframe
        //.waitForElementVisible('iframe', 1000)
        //.moveToElement('iframe', 25, 25)
        //.doubleClick()
        //.frame(null) 
  //}
//};
module.exports = {
 commands: [opensiteCommands],
 elements: {
 site: {
  	selector: '.body'
   }
 }
 };

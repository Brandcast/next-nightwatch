var justifytextformattingCommands = {
  justifyleftbtnenabled: function() {
    this.verify.elementPresent('@justifyleftbtn')
       .click('@justifyleftbtn') 
       //this.pause(300)
       //this.verify.elementPresent('.ui-wrapper.current [title="Justify Left"] .btn')
  },

  justifyleftbtndisabled: function() {
    this.verify.elementPresent('@justifyleftbtn')
       .click('@justifyleftbtn') 
       //this.pause(300)
       //this.verify.elementPresent('.ui-wrapper [title="Justify Left"] .btn')
  },
  
   justifycenterbtnenabled: function() {
    this.verify.elementPresent('@justifycenterbtn')
       .click('@justifycenterbtn') 
       //this.verify.elementPresent('.content.btn-panel-wrapper .ui-wrapper.current [title="Justify Center"]')
  },

  justifycenterbtndisabled: function() {
    this.verify.elementPresent('@justifycenterbtn')
       .click('@justifycenterbtn') 
       //this.verify.elementPresent('.ui-wrapper [title="Justify Center"] .btn')
  },

  justifyrightbtnenabled: function() {
    this.verify.elementPresent('@justifyrightbtn')
       .click('@justifyrightbtn') 
       //this.verify.elementPresent('.content.btn-panel-wrapper .ui-wrapper.current [title="Justify Center"]')
  },

  justifyrightbtndisabled: function() {
    this.verify.elementPresent('@justifyrightbtn')
       .click('@justifyrightbtn') 
       //this.verify.elementPresent('.ui-wrapper [title="Justify Center"] .btn')
  },

  justifiedtextbtnenabled: function() {
    this.verify.elementPresent('@justifiedtextbtn')
       .click('@justifiedtextbtn') 
       //this.verify.elementPresent('.content.btn-panel-wrapper .ui-wrapper.current [title="Justify Center"]')
  },

  justifiedtextbtndisabled: function() {
    this.verify.elementPresent('@justifiedtextbtn')
       .click('@justifiedtextbtn') 
       //this.verify.elementPresent('.ui-wrapper [title="Justify Center"] .btn')
  },
};

module.exports = {
  commands: [justifytextformattingCommands],
  elements: {
      justifyleftbtn : {
    	   selector: '[title="Justify Left"] .btn'
    }, 
    
      justifycenterbtn : {
        selector: '[title="Justify Center"] .btn'
    },

      justifyrightbtn : {
        selector: '[title="Justify Right"] .btn'
    },

      justifiedtextbtn : {
        selector: '[title="Justified Text"] .btn'
    },
  }
};

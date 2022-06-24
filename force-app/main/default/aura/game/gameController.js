({
    Startgame : function(component, event, helper) {
                let gamecombo = component.find("Gamever");

                let selectvalue = gamecombo.get("v.value");

                 console.log("start button is clicked"+selectvalue);
                 alert("start button is clicked"+selectvalue);
              },
    
    Reshufflebord : function(component, event, helper) {
        console.log("Reshufflebord button is clicked");
            }
});
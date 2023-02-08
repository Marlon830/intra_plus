var nb_of_kick_off = 0;
var nb_of_bootstrap = 0;

document.addEventListener("DOMContentLoaded", function(){
    chrome.storage.local.get(['key'], function(result) {
        console.log('Value currently is ' + result.key);
        var allObjects = result.key;
        if (allObjects != undefined) {
            document.getElementsByClassName("TEST")[0].style.display = "none";
        }
        for (var i = 0; i != allObjects.length; i++) {
            if (allObjects[i].isSubscribed == false) {
                if (allObjects[i].type.includes("Kick-off")) {
                    nb_of_kick_off++;
                    var par = document.createElement("p");
                    var text = document.createTextNode(allObjects[i].name + ", you can register it until " + allObjects[i].dateStart);
                    par.appendChild(text);
                    document.body.appendChild(par);
                }
                if (allObjects[i].type.includes("Bootstrap")) {
                    nb_of_bootstrap++;
                    var par = document.createElement("p");
                    var text = document.createTextNode(allObjects[i].name + ", you can register it until " + allObjects[i].dateStart);
                    par.appendChild(text);
                    document.body.appendChild(par);
                }
            }
        }
        if (nb_of_kick_off == 0 && nb_of_bootstrap == 0) {
            var par = document.createElement("h2");
            var text = document.createTextNode("You are registered to everything!");
            par.appendChild(text);
            document.body.appendChild(par);
        }
    });
});


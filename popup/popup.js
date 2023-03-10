var nb_of_kick_off = 0;
var nb_of_bootstrap = 0;
var nb_of_project = 0;

function convertDateFrToEn(date) {
    var i = 0;
    var temp = "";
    var temp2 = "";
    var temp3 = "";
    var real_date = "";
    while (date[i] != '/') {
        temp = temp + date[i];
        i++;
    }
    i++;
    while (date[i] != '/') {
        temp2 = temp2 + date[i];
        i++;
    }
    i++;
    while (i != date.length) {
        temp3 = temp3 + date[i];
        i++;
    }
    real_date = temp2 + '/' + temp + '/' + temp3;
    return real_date;
}

function canRegister(dateStart) {
    var today = new Date();
    var date = new Date(dateStart);
    if (date <= today) {
        return true;
    }
    return false;
}

function addElemToDoc(tag, str)
{
    var par = document.createElement(tag);
    var text = document.createTextNode(str);
    par.appendChild(text);
    document.body.appendChild(par);
}

document.addEventListener("DOMContentLoaded", function(){
    chrome.storage.local.get(['key'], function(result) {
        console.log('Value currently is ' + result.key);
        var allObjects = result.key;
        if (allObjects != undefined) {
            document.getElementsByClassName("TEST")[0].style.display = "none";
        }
        for (var i = 0; i != allObjects.length; i++) {
            if (allObjects[i].isSubscribed == false) {
                if (allObjects[i].type.includes("Kick-off") || allObjects[i].type.includes("Bootstrap")) {
                    nb_of_kick_off++;
                    nb_of_bootstrap++;
                    var d = new Date(convertDateFrToEn(allObjects[i].dateStart));
                    d.setDate(d.getDate()-1);
                    addElemToDoc("p", allObjects[i].name + ", you can register it until " + d.toLocaleString("fr"));
                }
                if ((allObjects[i].type.includes("Project") || allObjects[i].type.includes("Mini-project")) && canRegister(convertDateFrToEn(allObjects[i].dateStart))) {
                    nb_of_project++;
                    addElemToDoc("p", allObjects[i].name + ", you can register it since " + allObjects[i].dateStart);
                }
            }
        }
        if (nb_of_kick_off == 0 && nb_of_bootstrap == 0 && nb_of_project == 0) {
            addElemToDoc("h2", "You are registered to everything you can!");
        }
    });
});

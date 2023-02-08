document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("button1").addEventListener("click", function(){
        var body = document.getElementsByTagName("body")[0].style.backgroundColor = "green";
    });
    chrome.storage.local.get(['key'], function(result) {
        console.log('Value currently is ' + result.key);
        var allObjects = result.key;
        for (var i = 0; i != allObjects.length; i++) {
            if (allObjects[i].isSubscribed == false) {
                var par = document.createElement("p");
                var text = document.createTextNode(allObjects[i].name);
                par.appendChild(text);
                document.body.appendChild(par);
                //document.getElementsByClassName("TEST").item(0).innerHTML = allObjects[0].name;
            }
        }
    });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.greeting);
        var allObjects = request.greeting;
        sendResponse({farewell: "the packet has been received"});
        chrome.storage.local.set({key: allObjects}, function() {
            console.log('Value is set to ' + allObjects);
        });        
    }
);

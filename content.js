function makeStruct(keys) {
    if (!keys) return null;
    const k = keys.split(', ');
    const count = k.length;

    function constructor() {
      for (let i = 0; i < count; i++) this[k[i]] = arguments[i];
    }
    return constructor;
  }
  

const activite = new makeStruct("type, dateStart, isSubscribed");

function kick_off() {
    return;
}

function timeoutFunction() {
    var allObjects = [];
    var isRegistered = [];
    var allDate = [];
    var tempArr = [];
    var allCateg = [];
    var allHref = [];
    var allModule = document.getElementsByTagName("dd");
    var allDt = allModule[0].getElementsByClassName("module ongoing current");

    for (var i = 0; i != allDt.length; i++) {
        var link = allDt[i].getElementsByTagName("a");
        allHref.push(link[1].href);
    }
    for (var j = 0; j != allHref.length; j++) {
        console.log(allHref[j]);
        fetch(allHref[j]).then(function (response) {
            return response.text();
        }).then(function (html) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html');
            var allActivite = doc.getElementsByClassName("activite future");

            for (var i = 0; i != allActivite.length; i++) {
                var categ = allActivite[i].getElementsByClassName("categ");
                allCateg.push(categ[0].innerHTML);
                var dateStart = allActivite[i].getElementsByClassName("item date");
                tempArr.push(dateStart[0].getElementsByTagName("span")); 
                allDate.push(tempArr[i][1].innerHTML);
                isRegistered.push(allActivite[i].classList.contains("student-registered"));
                allObjects.push(new activite(allCateg[i], allDate[i], isRegistered[i]));
            }
            allCateg = [];
            allDate = [];
            isRegistered = [];
            tempArr = [];
            console.log(allObjects);
        }).catch(function (err) {
            console.warn('Something went wrong.', err);
        });
    }
}

setTimeout(timeoutFunction, 5000);

//console.log(allModule[0].innerText);
// for (var i = 0; i < text.length; i++) {
//     console.log(text[i]);
// }

// document.body.style.backgroundColor = 'white';
// console.log("CONTENT");

// if (text[i].innerText[0] == 'B' && text[i].innerText[1] == '2') {
//     console.log(text[i].innerText);
// }

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
// });
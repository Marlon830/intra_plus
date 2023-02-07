// chrome.runtime.onInstalled.addListener(() => {
//     console.log("hello world"); 


//     chrome.runtime.onMessage.addListener(
//         function(request, sender, sendResponse) {
//             console.log(sender.tab ?
//                         "from a content script:" + sender.tab.url :
//                         "from the extension");
//             if (request.greeting == "hello")
//                 sendResponse({farewell: "goodbye"});
//         }
//     );

//     chrome.contextMenus.create({
//         id: "1",
//         title: "search for \"%s\" on wikipedia",
//         contexts: ["selection"],
//     });
// });

// chrome.contextMenus.onClicked.addListener(function(info, tab) {
//     baseURL = "https://en.wikipedia.org/wiki/";
//     var newURL = baseURL + info.selectionText;
//     chrome.tabs.create({url: newURL});
// });

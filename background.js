chrome.runtime.onInstalled.addListener(() => {
    console.log("hello world"); 
    
    chrome.contextMenus.create({
        id: "1",
        title: "search for \"%s\" on wikipedia",
        contexts: ["selection"],
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    baseURL = "https://en.wikipedia.org/wiki/";
    var newURL = baseURL + info.selectionText;
    chrome.tabs.create({url: newURL});
});

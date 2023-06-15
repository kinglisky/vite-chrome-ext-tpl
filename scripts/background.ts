console.log('background init');

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(
        sender.tab
            ? 'from a content script:' + sender.tab.url
            : 'from the extension'
    );
    console.log({
        request,
        sender,
        sendResponse,
    });
    if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' });
});

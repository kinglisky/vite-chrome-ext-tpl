console.log('background init');

chrome.runtime.onInstalled.addListener((details) => {
    console.log('chrome.runtime.onInstalled', details);
});

chrome.runtime.onStartup.addListener(() => {
    console.log('chrome.runtime.onStartup');
});

chrome.runtime.onConnect.addListener(function (port) {
    if (port.name !== 'knockknock') return;
    console.log('port name', port);

    port.onMessage.addListener(function (msg) {
        console.log('backgroud port.onMessage', msg);
        if (msg.joke === 'Knock knock')
            port.postMessage({ question: "Who's there?" });
        else if (msg.answer === 'Madame')
            port.postMessage({ question: 'Madame who?' });
        else if (msg.answer === 'Madame... Bovary')
            port.postMessage({ question: "I don't get it." });
    });
});

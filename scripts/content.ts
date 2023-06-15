(async () => {
    console.log('content init');
    const response = await chrome.runtime.sendMessage({ greeting: 'hello' });
    // do something with response here, not outside the function
    console.log('response', response);
})();

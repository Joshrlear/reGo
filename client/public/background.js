console.log('Now running')

chrome.webRequest.onBeforeRequest.addListener(
    data => {
        console.log('running', data.type)
        if (data.type === "xmlhttprequest") {
            console.log(data)
            chrome.tabs.sendMessage(data.tabId, data.method)
        }
    },
    {urls: ["<all_urls>"]}
)

chrome.runtime.onMessage.addListener(data => {
    console.log(data)
    // store in database
    // GET request to eventbrite to authorize user
})
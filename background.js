chrome.webRequest.onBeforeRequest.addListener(
    data => {
        if (data.type === "xmlhttprequest" && data.url.includes("login")) {
            console.log(data)
            chrome.tabs.sendMessage(data.tabId, data.method)
        }
    },
    {urls: ["<all_urls>"]}
)

chrome.runtime.onMessage.addListener(data => console.log(data))
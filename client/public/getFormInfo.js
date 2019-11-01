console.log('getFomInfo is running')

chrome.runtime.onMessage.addListener(data => {
    console.log("method:",data)
    let inputs = document.getElementsByTagName("input")
    let message = []
    for (i of inputs) {
        console.log(i.name, i.value)
        if (i.name === "username" || i.name === "password") {
            message.push({[i.name]: i.value})
        }
    }
    console.log(message)
    chrome.runtime.sendMessage(message)
})
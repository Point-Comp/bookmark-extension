chrome.tabs.onUpdated.addListener((tabId, tab)=> {
  if (tab.url && tab.url.includes("youtube.com/watch")){
    const queryParameter = tab.url.split("?")[1] //splits from tab url question mark
    const urlParameters = new URLSearchParams(queryParameter);
    console.log(urlParameters)

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v")//the id from the url
      
    });

  }
});
  
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: "[...document.getElementsByTagName('button')].forEach(button => button.innerHTML = '<span>🥚</span>')"
  });
});

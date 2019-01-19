browser.browserAction.onClicked.addListener(function(tab) {
  browser.tabs.executeScript({
    file: 'contentScript.js'
  });
});

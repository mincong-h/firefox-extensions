browser.browserAction.onClicked.addListener(function(tab) {
  const urls = [
    'https://stackoverflow.com/questions/tagged/java+date',
    'https://stackoverflow.com/questions/tagged/java%20collections',
    'https://stackoverflow.com/questions/tagged/java+list',
    'https://stackoverflow.com/questions/tagged/java%20dictionary',
    'https://stackoverflow.com/questions/tagged/java%20arrays',
    'https://stackoverflow.com/questions/tagged/java-8',
    'https://stackoverflow.com/questions/tagged/git'
  ];
  urls.forEach(function(url) {
    browser.tabs.create({url: url});
  });
});

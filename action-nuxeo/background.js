browser.browserAction.onClicked.addListener(function(tab) {
  const urls = [
    'https://nuxeo.slack.com',
    'https://github.com/notifications',
    'https://mail.google.com/mail/u/0/',
    'https://qa.nuxeo.org/jenkins/securityRealm/commenceLogin?from=%2Fjenkins%2F'
  ];
  urls.forEach(function(url) {
    browser.tabs.create({url: url});
  });
});

function toFrench(date) {
  var months = [
    'janvier',
    'fevrier',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'decembre'
  ];
  return date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear();
}

function isWeekend(date) {
  switch(date.getDay()) {
    case 0: return true; // Sunday
    case 5: return true; // Friday
    case 6: return true; // Saturday
  }
  return false;
}

/**
 * URL Examples:
 * - JT-20H (Mon - Tue): 'https://www.tf1.fr/tf1/jt-20h/videos/20-heures-12-avril-2017.html'
 * - JT-WE  (Fri - Sun): 'https://www.tf1.fr/tf1/jt-we/videos/20-heures-14-avril-2017.html'
 */
browser.browserAction.onClicked.addListener(function(tab) {
  var d = new Date(Date.now() - 86400000); // yesterday
  var url;
  if (isWeekend(d)) {
    url = 'https://www.tf1.fr/tf1/jt-we/videos/20-heures-' + toFrench(d) + '.html';
  } else {
    url = 'https://www.tf1.fr/tf1/jt-20h/videos/20-heures-' + toFrench(d) + '.html';
  }
  browser.tabs.create({url: url});
});

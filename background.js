chrome.browserAction.onClicked.addListener(function(tab) {
  var match = /\/document\/d\/([A-Za-z0-9\-\_]+)/g.exec(tab.url);
  if (match && match[1]) {
    chrome.tabs.create({
      url: 'https://qwiklabs-publishing-tools.appspot.com/preview?src=' + match[1]
    });
  }
});

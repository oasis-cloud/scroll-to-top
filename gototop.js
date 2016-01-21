chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' to the page top!');
  chrome.tabs.executeScript({
    code: 'document.body.scrollTop=0'
  });
});

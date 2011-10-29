// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
	if ( tab.url.indexOf('http://sharp-cloud-6961.heroku.com/') > -1 ) {
		return;
	}
	
	chrome.pageAction.show(tabId);
};

// Called when click on the button
function onButtonClicked(tab) {
	request = {
		"code": "redirect",
		"url": 'http://sharp-cloud-6961.heroku.com/conts/g?link=' + tab.url
	};
	chrome.tabs.sendRequest(tab.id, request, null);
}

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.pageAction.onClicked.addListener(onButtonClicked); 

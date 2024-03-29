// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
	if ( !tab.url.match(/.htm$/) && !tab.url.match(/.html$/)) {
		return;
	}
	
	chrome.pageAction.show(tabId);
};

// Called when click on the button
function onButtonClicked(tab) {
	request = {
		"code": "redirect",
		"url": 'http://didaread.com/g?link=' + tab.url
	};
	chrome.tabs.sendRequest(tab.id, request, null);
}

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.pageAction.onClicked.addListener(onButtonClicked); 

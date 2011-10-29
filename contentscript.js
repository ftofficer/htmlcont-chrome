function onExtensionRequest(request, sender, sendResponse) {
	
	request_code = request.code;
	
	if ( request_code == "redirect" ) {
		window.location.href = request.url;
		sendResponse({"result": true});
	}
}

chrome.extension.onRequest.addListener(onExtensionRequest);


const saveExtractedText = (data) => {
  fetch('https://xn--p8jtcsf.moe/showText', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: data
  })
    .then(response => {
      if (!response.ok) {
        console.error('POST request failed with status:', response.status);
        return;
      }
      console.log('POST request successful!');
    })
    .catch(error => console.error('Error in POST request:', error));
}
chrome.runtime.onMessage.addListener(
  (request) => {
    switch (request.action) {
      case 'numbers': {
        saveExtractedText(request.data);
        break;
      }
      default:
    }
  }
);
const saveExtractedText = (data: any) => {
    $.post('http://localhost:3000/api/data', data);
  }
  chrome.runtime.onMessage.addListener(
    (request, sender, senderResponse) => {
      switch (request.message) {
        case 'numbers': {
          saveExtractedText(request.data);
          break;
        }
        default:
      }
    }
  );
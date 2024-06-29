chrome.runtime.sendMessage({ action: "getText" }, (response) => {
    if (response && response.text) {
      const textElement = document.getElementById("extractedText");
      textElement.textContent = response.text;
    }
  });
  
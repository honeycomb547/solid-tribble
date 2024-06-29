chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Hello World')
    if (message.action === "getText") {
      if (message.text) {
        const url = "sauce.html"; // Replace with your webpage URL
        chrome.tabs.create({ url: url });
      }
    }
  });
  
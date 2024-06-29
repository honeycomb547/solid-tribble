const url = window.location.href;

// Extract strings based on URL format
let extractedStrings = {};

if (url.includes("/g/")) {
  // Two possible patterns:
  const regex1 = /\/g\/([a-zA-Z0-9]+)/;
  const regex2 = /\/g\/([a-zA-Z0-9]+)\/(.*)/;

  const match1 = url.match(regex1);
  const match2 = url.match(regex2);

  console.log('match1: ' + match1);
  console.log('match2: ' + match2);

  if (match1) {
    extractedStrings = {
      string1: match1[1],
      string2: "", // No string2 in this format
    };
  }

  if (match2 && match2[2]) {
    const string2WithoutTrailingSlash = match2[2].endsWith('/') ? match2[2].slice(0, -1) : match2[2];
    extractedStrings = {
      string1: match2[1],
      string2: string2WithoutTrailingSlash,
    };
  }
} else {
  extractedStrings = {}; // Indicate no match for unsupported format
}

// Display the extracted strings (optional)
console.log("Extracted strings:", extractedStrings);
chrome.runtime.sendMessage({ action: 'getText', text: extractedStrings });

// You can further process the extracted strings here

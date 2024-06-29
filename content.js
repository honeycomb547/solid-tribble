const url = window.location.href;

// Extract strings based on URL format
let extractedStrings = {};

if (url.includes("/g/")) {
  // Two possible patterns:
  const regex1 = /\/g\/([a-zA-Z0-9]+)/;
  const regex2 = /\/g\/([a-zA-Z0-9]+)\/(.*)/;

  const match1 = url.match(regex1);
  const match2 = url.match(regex2);

  if (match1) {
    extractedStrings = `NHentai: ${match1[1]}`;
  }

  if (match2 && match2[2]) {
    const string2WithoutTrailingSlash = match2[2].endsWith('/') ? match2[2].slice(0, -1) : match2[2];
    extractedStrings = `ExHentai: ${match2[1]}/${string2WithoutTrailingSlash}`;
  }
  
} else {
  extractedStrings = ''; // Indicate no match for unsupported format
}

chrome.runtime.sendMessage({ action: 'numbers', data: extractedStrings });

// Get the current URL
const url = window.location.href;

// Extract strings based on URL format
let extractedStrings;
if (url.includes("/g/")) {  // Check for "/g/" format
  // Extract 6-digit number (same logic as before)
  const regex = /\/g\/(\d{6})/;
  const match = url.match(regex);
  if (match) {
    extractedStrings = {
      string1: match[1],  // Extracted number
      string2: url.split("/")[4],  // Assume 4th segment after "/"
    };
  } else {
    extractedStrings = "Number not found in URL format";
  }
} else {
  // Extract strings from non- "/g/" format
  const urlParts = url.split("/");
  if (urlParts.length >= 4) {
    extractedStrings = {
      string1: urlParts[3],  // Assume 3rd segment after "/"
      string2: urlParts[4],  // Assume 4th segment after "/"
    };
  } else {
    extractedStrings = "URL format not supported";
  }
}

// Display the extracted strings (optional)
console.log("Extracted strings:", extractedStrings);

// You can further process the extracted strings here

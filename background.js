const defaultFilters = [
  "*://*.doubleclick.net/*",
  "*://partner.googleadservices.com/*",
];

const filesToFetch = [
  "easylist.txt",
  "easyprivacy.txt",
  "fanboy-annoyance.txt",
  "fanboy-cookiemonster.txt",
  "fanboy-social.txt",
];

Promise.all(filesToFetch.map(fetchFile))
  .then((fileContents) => {
    // Parse the filters from each file and add them to the defaultFilters array
    fileContents.forEach((fileContent) => {
      const additionalFilters = fileContent
        .split("\n")
        .filter((filter) => filter.trim() !== "");
      defaultFilters.push(...additionalFilters);
    });
  })
  .catch((error) => console.error(error));

async function fetchFile(fileName) {
  try {
    const response = await fetch(fileName);
    return await response.text();
  } catch (error) {
    return console.error(error);
  }
}

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: defaultFilters },
  ["blocking"]
);

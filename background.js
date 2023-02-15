const defaultFilters = [
  "*://*.doubleclick.net/*",
  "*://partner.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.google-analytics.com/*",
  "*://creative.ak.fbcdn.net/*",
  "*://*.adbrite.com/*",
  "*://*.exponential.com/*",
  "*://*.quantserve.com/*",
  "*://*.scorecardresearch.com/*",
  "*://*.zedo.com/*",
  "*://*.doubleclick.net/*",
  "*://*.googlesyndication.com/*",
  "*://*.googletagservices.com/*",
  "*://*.googleadservices.com/*",
  "*://*.google-analytics.com/*",
  "*://*.googleadservices.com/*",
  "*://*.zedo.com/*",
  "*://*.adbrite.com/*",
  "*://*.adbureau.net/*",
  "*://*.carbonads.net/*",
  "*://*.cdn.carbonads.com/*",
  "*://*.cdn.carbonads.net/*",
  "*://*.cdn.doubleclick.net/*",
  "*://*.cdn.googletagservices.com/*",
  "*://*.cdn.googleadservices.com/*",
  "*://*.cdn.zedo.com/*",
  "*://*.clickup.com/*",
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: defaultFilters },
  ["blocking"]
);

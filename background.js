console.log("✅ background.js loaded");

self.addEventListener("install", () => {
  console.log("🛠️ Service Worker installed");
});

self.addEventListener("activate", () => {
  console.log("🚀 Service Worker activated");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("📬 bg.js received message:", message);

  if (message.type === "copied") {
    chrome.storage.local.get(["clipboardHistory"], (result) => {
      let history = result.clipboardHistory || [];

      if (!history.includes(message.text)) {
        history.unshift(message.text);
        if (history.length > 10) history = history.slice(0, 10);
        chrome.storage.local.set({ clipboardHistory: history });
        console.log("✅ Saved to history:", history);
      }
    });
  }
});

  
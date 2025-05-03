console.log("✅ content.js IS RUNNING");

["copy", "cut"].forEach(eventType => {
  document.addEventListener(eventType, () => {
    const selectedText = document.getSelection()?.toString();
    if (selectedText) {
      console.log("📋 Captured text:", selectedText);
      chrome.runtime.sendMessage({ type: "copied", text: selectedText });
    }
  });
});

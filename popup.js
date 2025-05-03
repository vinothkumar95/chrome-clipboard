document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("clipboardHistory", (result) => {
      const history = result.clipboardHistory || [];
      const container = document.getElementById("historyContainer");
  
      container.innerHTML = "";
  
      if (history.length === 0) {
        container.innerHTML = '<p class="empty">No copied text yet.</p>';
        return;
      }
  
      history.forEach((text) => {
        const div = document.createElement("div");
        div.className = "clipboard-item";
        div.textContent = text;
  
        div.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(text);
            div.style.background = "#d1fae5"; // green-ish
            div.style.transition = "none";
            setTimeout(() => window.close(), 300); // optional: close popup
          } catch (err) {
            alert("Failed to write to clipboard.");
          }
        });
  
        container.appendChild(div);
      });
    });
  });
  
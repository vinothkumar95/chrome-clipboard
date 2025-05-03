# 📌 Kolam CBH – Clipboard History for Chrome

A modern Chrome extension that tracks and stores the last 10 copied texts (clipboard history), with a clean UI and one-click copy.

---

## ✨ Features

- 🧠 Remembers the last **10 copied texts**
- 🎨 Beautiful, modern popup UI
- 🖱️ Click any saved text to **instantly copy it again**
- 💾 Data saved using `chrome.storage.local`
- ⚙️ Runs silently in the background

---

## 📦 Installation (Development Mode)

1. Clone or download this repository:

   ```bash
   git clone https://github.com/your-username/kolam-cbh.git
   ````

2. Open Google Chrome and go to:

    ```bash
    chrome://extensions/
    ```

3. Enable Developer mode (top right)

4. Click "Load unpacked" and select the project folder

5. You're done! ✅ Try copying text on any webpage.

## 📁 Project Structure

        chrome-clipboard/
        │
        ├── manifest.json          # Chrome extension config
        ├── background.js          # Handles saving history
        ├── content.js             # Listens to copy events on websites
        ├── popup.html             # Extension popup UI
        ├── popup.js               # Popup logic (load, click-to-copy)
        ├── icons/                 # Extension icons
        └── README.md              # This file
  


## 🔐 Permissions Used
    storage – To save clipboard history

    clipboardRead, clipboardWrite – To read/write clipboard

    activeTab, scripting – For interactions (future use)

    host_permissions – To run on all pages

##  🚧 Known Limitations
    Some sites like Google Docs or Facebook may block clipboard event detection

    Direct pasting into fields from popup is blocked by browser security, but re-copy works fine

## 📜 License
MIT – Feel free to use, modify, and share!

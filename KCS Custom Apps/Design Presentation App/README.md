# Design Presentation Generator

A small standalone app (separate from the Shiloh Quick Quote App) for quickly turning your most recent design screenshots into a clean, landscape, print-ready presentation to hand or email to a customer.

## How to use it

1. Double-click **`Start App.command`** in this folder.
   - This opens a Terminal window and launches a tiny local web server, then opens the app in your default browser at `http://localhost:8765`.
   - Leave that Terminal window open while you use the app. Closing it (or Ctrl+C) stops the server.
2. **First time only:** click **Connect Folder** and choose `/Users/blakepetipas/Documents/Screenshots` (the picker opens straight to your Documents folder, so it's basically one click). The browser remembers this going forward (per browser) — you won't be asked again after that.
   - Note: browsers don't allow a web page to silently grab access to a folder without this one-time confirmation click — it's a security restriction, not something this app can skip.
3. Type the **Customer Name**.
4. Type the **number of most recent photos** to pull (e.g. 10).
5. Click **Generate Presentation**.
6. A new tab opens with one photo per landscape page, each labeled with the page number (top-left) and the customer's name (top-right). Click **Print / Save as PDF** in that tab, then choose "Save as PDF" as the destination in the print dialog.

## Google Drive Sharing (optional, one-time setup)

The **Share via Google Drive** button uploads the presentation you just generated straight to your Google Drive, makes it link-shareable, and hands you a URL to copy into an email or text — no manual dragging into Drive, no attachment size limits.

Because a web page can't silently push files into your Drive without your permission, you need to create a free Google OAuth Client ID once. Takes about 5 minutes:

1. Go to **https://console.cloud.google.com/** and sign in with the Google account you want presentations uploaded to.
2. Create a new project (top-left project dropdown → New Project). Name it something like "Design Presentation App".
3. Go to **APIs & Services → Library**, search for **Google Drive API**, and click **Enable**.
4. Go to **APIs & Services → OAuth consent screen**.
   - User Type: choose **Internal** if this is a Google Workspace account (e.g. your KCS business account), or **External** if it's a personal Gmail.
   - Fill in the app name ("Design Presentation App"), your support email, and save.
   - If you chose External, add yourself under **Test users** — you'll see an "unverified app" warning on sign-in, which is expected and fine since only you use this.
5. Go to **APIs & Services → Credentials → Create Credentials → OAuth client ID**.
   - Application type: **Web application**.
   - Under **Authorized JavaScript origins**, add: `http://localhost:8765`
   - Click **Create**, then copy the Client ID it gives you (looks like `123456789-abc...apps.googleusercontent.com`).
6. In the app, open **Google Drive Sharing** (above the Generate button), paste the Client ID in, and it's saved in this browser for next time.

After that, generating a presentation enables the **Share via Google Drive** button. Clicking it opens a Google sign-in popup (first time only per session), uploads the file, sets it to "anyone with the link can view," and shows you the link with a Copy button.

The app only requests the `drive.file` permission scope — it can only see/manage files it uploads itself, nothing else in your Drive.

## Notes

- Only `.png`, `.jpg`, and `.jpeg` files are considered. HEIC, GIF, video, and other file types are automatically skipped, even if they're more recent than the images.
- "Most recent" is based on each file's last-modified date.
- Nothing is uploaded anywhere — everything happens locally in your browser. The generated presentation tab is self-contained (photos are embedded), so you can also just leave it open, or re-print it later without regenerating, as long as the tab stays open.
- Requires **Chrome or Edge** (Safari does not yet support the folder-access feature this app relies on).
- If you ever see a permission/security message on load, it means the page wasn't served from `http://localhost` — always launch via `Start App.command`, don't double-click `index.html` directly.

## Files

- `index.html` — the app itself
- `Start App.command` — launcher (starts local server + opens browser)
- `README.md` — this file

#!/bin/bash
# Design Presentation Generator - launcher
# Serves this folder on localhost (required for folder-access permissions)
# and opens it in the default browser.

cd "$(dirname "$0")"

PORT=8765
URL="http://localhost:${PORT}/"

# If something is already running on this port, just open the browser.
if lsof -i :${PORT} -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Server already running on port ${PORT}."
else
  echo "Starting Design Presentation Generator on ${URL}"
  python3 -m http.server ${PORT} >/dev/null 2>&1 &
  sleep 1
fi

open "${URL}"

echo ""
echo "Design Presentation Generator is running at ${URL}"
echo "You can close this window, but leave it running in Terminal while you use the app."
echo "Press Ctrl+C here to stop the server when you're done."
wait

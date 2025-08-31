#!/usr/bin/osascript

# Fast launcher for Mountie Markers
# Bypasses Shortcuts overhead

on run
    # Direct app activation without going through Shortcuts
    tell application "Mountie Markers"
        activate
    end tell
end run

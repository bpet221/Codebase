#!/bin/bash

# Check if Time Machine is currently backing up
if /usr/bin/tmutil status | grep -q "BackupPhase"; then
  echo "Time Machine is currently backing up. Unmount aborted." >> /Users/blakepetipas/Code/Time_machine_scripts/log.txt
else
  # If not backing up, run the unmount AppleScript
  /usr/bin/osascript /Users/blakepetipas/Code/Time_machine_scripts/AutoUnMountOWCdisc.scpt
  echo "Unmount script executed at $(date)" >> /Users/blakepetipas/Code/Time_machine_scripts/log.txt
fi
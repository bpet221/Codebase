#!/bin/bash

logfile="/Users/blakepetipas/Code/Time_machine_scripts/log.txt"

echo "Wake event at $(date)" >> "$logfile"
osascript /Users/blakepetipas/Code/Time_machine_scripts/AutoMountOWCdisc.scpt
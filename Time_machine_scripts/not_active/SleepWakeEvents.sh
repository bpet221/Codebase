#!/bin/bash

logfile="/Users/blakepetipas/Code/Time_machine_scripts/log.txt"

if [ "$1" == "sleep" ]; then
    echo "Sleep event at $(date)" >> "$logfile"
elif [ "$1" == "wake" ]; then
    echo "Wake event at $(date)" >> "$logfile"
else
    echo "Invalid argument. Use 'sleep' or 'wake'." >> "$logfile"
fi
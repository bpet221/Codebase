#!/bin/bash

logfile="/Users/blakepetipas/Code/Time_machine_scripts/log.txt"

case "$1" in
    "sleep")
        echo "Sleep event at $(date)" >> "$logfile"
        ;;
    "wake")
        echo "Wake event at $(date)" >> "$logfile"
        ;;
    *)
        echo "Invalid argument. Use 'sleep' or 'wake'." >> "$logfile"
        ;;
esac
#!/bin/bash

# Start a Time Machine backup
tmutil startbackup

# Log the backup initiation
echo "Time Machine backup started at $(date)" >> /Users/blakepetipas/Code/Time_machine_scripts/log.txt
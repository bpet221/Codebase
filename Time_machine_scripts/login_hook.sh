#!/bin/bash

logfile="/Users/blakepetipas/Code/Time_machine_scripts/log.txt"

# Function to log events
log_event() {
    echo "$1 at $(date)" >> "$logfile"
}

# Log the start of the login hook script
log_event "Login hook script started"

# Mount the disk
log_event "Mounting the OWC Mercury Elite Pro disk"
/usr/sbin/diskutil mount "OWC Mercury Elite Pro"
log_event "Mount script executed"

# Delay for 1 minute (60 seconds) to ensure the disk is mounted properly
sleep 60

# Start Time Machine backup
log_event "Starting Time Machine backup"
/Users/blakepetipas/Code/Time_machine_scripts/create_tm_backup.sh
log_event "Time Machine backup started"

# Delay for an additional 30 minutes to allow the backup to complete
# You can adjust this delay based on your average backup time
sleep 1800

# Run the check and unmount script
log_event "Running check and unmount script"
/Users/blakepetipas/Code/Time_machine_scripts/check_and_unmount.sh
log_event "Check and unmount script executed"

# Log the completion of the login hook script
log_event "Login hook script completed"

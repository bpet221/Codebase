#!/bin/zsh
ip=$(curl -s https://api.ipify.org)
timestamp=$(date)
echo "$timestamp - $ip" >> "/Users/blakepetipas/Code Repos/Codebase/Mac Automations/Public IP Connection Log/ip_log.txt"

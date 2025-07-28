#!/bin/zsh
cd "/Users/blakepetipas/Code Repos/KCS Shopify Theme"

# Get changed files (excluding hidden files like .DS_Store), handle empty gracefully
changed_files=$(git status --porcelain | awk '{print $2}' | grep -v '^\.' | tr '\n' ',' | sed 's/,$//')

if [[ -n "$changed_files" ]]; then
  git add .
  timestamp=$(date "+%m.%d.%y %I:%M%p")
  git commit -m "Auto-commit: $changed_files [$timestamp]"
  git push origin main
fi
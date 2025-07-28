#!/bin/zsh
cd "/Users/blakepetipas/Code Repos/Codebase"

if [[ -n $(git status --porcelain) ]]; then
  git add .

  # Get changed file paths, ignoring hidden files (e.g., .DS_Store)
  files=$(git status --porcelain | awk '{print $2}' | grep -v '^\.') 

  # Build commit message from file names
  msg="Auto-commit:"
  for file in $files; do
    msg="$msg ${file// /_},"
  done
  msg=${msg%,}  # remove trailing comma

  git commit -m "$msg"
  git push origin main
fi

#!/bin/zsh
cd "/Users/blakepetipas/Code Repos/SK Site"

if [[ -n $(git status --porcelain) ]]; then
  git add .
  timestamp=$(date "+%m.%d.%y %I:%M%p")
  git commit -m "Auto-commit: Daily sync [$timestamp]"
  git push origin main
fi

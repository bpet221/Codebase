#!/bin/bash

echo "Choose a repo to push to:"
echo "1) Codebase"
echo "2) SK Site"
read -p "Enter 1 or 2: " choice

if [ "$choice" = "1" ]; then
    cd /Users/blakepetipas/Code\ Repos/Codebase
    remote="origin"
    branch="main"
elif [ "$choice" = "2" ]; then
    cd /Users/blakepetipas/Code\ Repos/SK\ Site
    remote="sk-site"
    branch="main"
else
    echo "Invalid choice. Exiting."
    exit 1
fi

git add .
read -p "Commit message: " msg
git commit -m "$msg"
git push $remote $branch
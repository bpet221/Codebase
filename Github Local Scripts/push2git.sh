#!/bin/bash

# ============================================================================
# MANUAL GIT PUSH WITH INTERACTIVE MENU
# ============================================================================
# Triggered by alias: push2git
# Alias defined in: ~/.zshrc
# Edit alias: nano ~/.zshrc (then run: source ~/.zshrc)
#
# What this script does:
# 1. Presents menu to choose repo: Codebase, SK Site, or KCS Shopify
# 2. Prompts for manual commit message (NO AI generation)
# 3. Commits and pushes to appropriate remote/branch
#
# Note: This is for manual commits. For automated Shopify commits with AI,
#       use push2shop or pullfromshop instead.
# ============================================================================

echo "Choose a repo to push to:"
echo "1) Codebase"
echo "2) SK Site"
echo "3) KCS Shopify"
read -p "Enter 1, 2, or 3: " choice

case "$choice" in
  1)
    cd "/Users/blakepetipas/Code Repos/Codebase"
    remote="origin"
    branch="main"
    ;;
  2)
    cd "/Users/blakepetipas/Code Repos/SK Site"
    remote="sk-site"
    branch="main"
    ;;
  3)
    cd "/Users/blakepetipas/Code Repos/KCS Shopify Theme"
    remote="origin"
    branch="main"
    ;;
  *)
    echo "Invalid choice. Exiting."
    exit 1
    ;;
esac

git add .
read -p "Commit message: " msg
git commit -m "$msg"
git push $remote $branch
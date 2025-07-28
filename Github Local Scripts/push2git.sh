#!/bin/bash

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

if [ "$choice" = "3" ]; then
  read -p "Also push to Shopify theme? (y/n): " push_shopify
  if [[ "$push_shopify" =~ ^[Yy]$ ]]; then
    shopify theme push --theme 140720275534 --path . --store aeb786-12.myshopify.com
  fi
fi
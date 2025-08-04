#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Source the theme ID from the centralized config file
source "$SCRIPT_DIR/ACTIVEthemeid.sh"

echo "Starting development server for theme: $THEME_ID"
echo "You'll be able to see live changes at http://127.0.0.1:9292"
echo ""

cd "/Users/blakepetipas/Code Repos/KCS Shopify Theme"
# Try default port first, if busy use 9293
shopify theme dev --theme $THEME_ID --store aeb786-12.myshopify.com --open --nodelete --port 9292 || 
shopify theme dev --theme $THEME_ID --store aeb786-12.myshopify.com --open --nodelete --port 9293

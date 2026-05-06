#!/bin/bash

# KCS Active CLI Theme ID Configuration
# Edit this file to change the theme ID for all Shopify CLI actions

# Current active theme ID
THEME_ID="149443739726"

# Theme name/description (optional, for reference)
THEME_NAME="Main Development Theme"

# Export the variable so other scripts can use it
export THEME_ID
export THEME_NAME

# Optional: Display current theme info when sourced directly
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    echo "Current active theme ID: $THEME_ID"
    echo "Theme description: $THEME_NAME"
    echo ""
    echo "To change the theme ID, edit this file: $0"
    echo "Then run any of the other CLI scripts - they will automatically use the updated theme ID."
fi

#!/bin/bash

# Define full path to displayplacer
DISPLAYPLACER="/opt/homebrew/bin/displayplacer"

# Get current display settings
CURRENT_SETTINGS=$($DISPLAYPLACER list)

# Check if iPad Pro 13 M4 is at 1032x774
if echo "$CURRENT_SETTINGS" | grep -q 'id:B66BFCE0-2F0A-4C1D-B986-CEB6DA2A8516 res:1032x774'; then
    # Change MBP 16 to 2056x1329
    $DISPLAYPLACER "id:37D8832A-2D66-02CA-B9F7-8F30A301B230 res:2056x1329 hz:120 color_depth:8 enabled:true scaling:on origin:(0,0) degree:0"
    sleep 1  # Wait briefly to ensure settings apply
    
    # Restore displays to condition 1 settings
    $DISPLAYPLACER \
        "id:37D8832A-2D66-02CA-B9F7-8F30A301B230 res:1728x1117 hz:120 color_depth:8 enabled:true scaling:on origin:(0,0) degree:0" \
        "id:B66BFCE0-2F0A-4C1D-B986-CEB6DA2A8516 res:1032x774 hz:60 color_depth:4 enabled:true scaling:on origin:(-1032,343) degree:0" \
        "id:366D0BEC-80B8-461B-964C-F8E3D3133C6E res:1020x766 hz:60 color_depth:4 enabled:true scaling:on origin:(1728,0) degree:0"
    exit 0  # End script
fi

# Check if iPad Pro 13 M4 is at 1376x1032
if echo "$CURRENT_SETTINGS" | grep -q 'id:B66BFCE0-2F0A-4C1D-B986-CEB6DA2A8516 res:1376x1032'; then
    # Change MBP 16 to 2056x1329
    $DISPLAYPLACER "id:37D8832A-2D66-02CA-B9F7-8F30A301B230 res:2056x1329 hz:120 color_depth:8 enabled:true scaling:on origin:(0,0) degree:0"
    sleep 1  # Wait briefly to ensure settings apply
    
    # Restore displays to condition 2 settings
    $DISPLAYPLACER \
        "id:37D8832A-2D66-02CA-B9F7-8F30A301B230 res:1728x1117 hz:120 color_depth:8 enabled:true scaling:on origin:(0,0) degree:0" \
        "id:B66BFCE0-2F0A-4C1D-B986-CEB6DA2A8516 res:1376x1032 hz:60 color_depth:4 enabled:true scaling:on origin:(-1376,0) degree:0" \
        "id:366D0BEC-80B8-461B-964C-F8E3D3133C6E res:1366x1024 hz:60 color_depth:4 enabled:true scaling:on origin:(1728,0) degree:0"
    exit 0  # End script
fi

# If neither condition is met, display an alert
osascript -e 'display alert "iPad Pro 13 M4 not detected at 1032x774 or 1376x1032"'# update Thu Apr 17 17:35:29 EDT 2025

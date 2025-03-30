#!/bin/zsh

# Source the display details from identify_displays.sh
display_info=$(./identify_displays.sh)

# Extract display bounds based on display type
retina_lcd_info=$(echo "$display_info" | grep "Retina LCD")
built_in_liquid_retina_info=$(echo "$display_info" | grep "Built-in Liquid Retina")

# Count the number of displays detected
display_count=$(echo "$display_info" | grep -c "Retina LCD\|Built-in Liquid Retina")

# Set display bounds based on the display type
if [ -n "$retina_lcd_info" ]; then
    retina_lcd_x=0
    retina_lcd_y=0
    retina_lcd_width=5120
    retina_lcd_height=2880
else
    retina_lcd_x=""
    retina_lcd_y=""
    retina_lcd_width=""
    retina_lcd_height=""
fi

if [ -n "$built_in_liquid_retina_info" ]; then
    if [ -n "$retina_lcd_info" ]; then
        # Assuming position relative to Retina LCD when both are connected
        built_in_liquid_retina_x=-1496
        built_in_liquid_retina_y=0
    else
        # When only the Built-in Liquid Retina display is active
        built_in_liquid_retina_x=0
        built_in_liquid_retina_y=0
    fi
    built_in_liquid_retina_width=1496
    built_in_liquid_retina_height=967
else
    built_in_liquid_retina_x=""
    built_in_liquid_retina_y=""
    built_in_liquid_retina_width=""
    built_in_liquid_retina_height=""
fi

# Use AppleScript to get the position and size of the frontmost window
window_info=$(osascript -e '
tell application "System Events"
    set frontApp to first application process whose frontmost is true
    set frontWindow to first window of frontApp
    set windowPosition to position of frontWindow
    set windowSize to size of frontWindow
    return {windowPosition, windowSize}
end tell
')

# Extract the window position and size
window_x=$(echo $window_info | awk -F', ' '{print $1}' | tr -d '{()}')
window_y=$(echo $window_info | awk -F', ' '{print $2}' | tr -d '{}')
window_width=$(echo $window_info | awk -F', ' '{print $3}' | tr -d '{}')
window_height=$(echo $window_info | awk -F', ' '{print $4}' | tr -d '{}')

# Ensure all variables are integers
retina_lcd_x=$(printf "%.0f" $retina_lcd_x)
retina_lcd_y=$(printf "%.0f" $retina_lcd_y)
retina_lcd_width=$(printf "%.0f" $retina_lcd_width)
retina_lcd_height=$(printf "%.0f" $retina_lcd_height)
built_in_liquid_retina_x=$(printf "%.0f" $built_in_liquid_retina_x)
built_in_liquid_retina_y=$(printf "%.0f" $built_in_liquid_retina_y)
built_in_liquid_retina_width=$(printf "%.0f" $built_in_liquid_retina_width)
built_in_liquid_retina_height=$(printf "%.0f" $built_in_liquid_retina_height)
window_x=$(printf "%.0f" $window_x)
window_y=$(printf "%.0f" $window_y)
window_width=$(printf "%.0f" $window_width)
window_height=$(printf "%.0f" $window_height)

# Check if the window is within the bounds of the Retina LCD
if [ "$window_x" -ge "$retina_lcd_x" ] && [ "$window_x" -lt $(($retina_lcd_x + $retina_lcd_width)) ] && [ "$window_y" -ge "$retina_lcd_y" ] && [ "$window_y" -lt $(($retina_lcd_y + $retina_lcd_height)) ]; then
    echo "Retina LCD $display_count"
# Check if the window is within the bounds of the Built-in Liquid Retina Display
elif [ "$window_x" -ge "$built_in_liquid_retina_x" ] && [ "$window_x" -lt $(($built_in_liquid_retina_x + $built_in_liquid_retina_width)) ] && [ "$window_y" -ge "$built_in_liquid_retina_y" ] && [ "$window_y" -lt $(($built_in_liquid_retina_y + $built_in_liquid_retina_height)) ]; then
    echo "Built-in Liquid Retina $display_count"
else
    echo "Unknown Display $display_count"
fi


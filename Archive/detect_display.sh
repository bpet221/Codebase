#!/bin/zsh

# Function to get the display information using system_profiler
get_display_info() {
    system_profiler SPDisplaysDataType | awk -v RS="" '
    /Retina LCD/ {
        studio_x = 0;  # Placeholder, real parsing logic may be needed
        studio_y = 0;  # Placeholder, real parsing logic may be needed
        studio_width = 5120;  # Replace with actual width
        studio_height = 2880;  # Replace with actual height
    }
    /Built-in Liquid Retina XDR Display/ {
        mbp_x = -3456;  # Assumed position relative to the Studio Display
        mbp_y = 0;  # Placeholder, real parsing logic may be needed
        mbp_width = 3456;  # Replace with actual width
        mbp_height = 2234;  # Replace with actual height
    }
    END {
        print studio_x, studio_y, studio_width, studio_height;
        print mbp_x, mbp_y, mbp_width, mbp_height;
    }'
}

# Get the display info
display_info=$(get_display_info)

# Extract display bounds
studio_display_info=$(echo "$display_info" | sed -n '1p')
mbp_display_info=$(echo "$display_info" | sed -n '2p')

studio_x=$(echo $studio_display_info | awk '{print $1}')
studio_y=$(echo $studio_display_info | awk '{print $2}')
studio_width=$(echo $studio_display_info | awk '{print $3}')
studio_height=$(echo $studio_display_info | awk '{print $4}')

mbp_x=$(echo $mbp_display_info | awk '{print $1}')
mbp_y=$(echo $mbp_display_info | awk '{print $2}')
mbp_width=$(echo $mbp_display_info | awk '{print $3}')
mbp_height=$(echo $mbp_display_info | awk '{print $4}')

# Debug: Print extracted values
echo "Studio Display: x=$studio_x, y=$studio_y, width=$studio_width, height=$studio_height"
echo "MBP Display: x=$mbp_x, y=$mbp_y, width=$mbp_width, height=$mbp_height"

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

# Debug: Print window bounds
echo "Window: x=$window_x, y=$window_y, width=$window_width, height=$window_height"

# Ensure all variables are integers
studio_x=$(printf "%.0f" $studio_x)
studio_y=$(printf "%.0f" $studio_y)
studio_width=$(printf "%.0f" $studio_width)
studio_height=$(printf "%.0f" $studio_height)
mbp_x=$(printf "%.0f" $mbp_x)
mbp_y=$(printf "%.0f" $mbp_y)
mbp_width=$(printf "%.0f" $mbp_width)
mbp_height=$(printf "%.0f" $mbp_height)
window_x=$(printf "%.0f" $window_x)
window_y=$(printf "%.0f" $window_y)
window_width=$(printf "%.0f" $window_width)
window_height=$(printf "%.0f" $window_height)

# Debug: Confirm integer conversion
echo "Confirmed Studio Display: x=$studio_x, y=$studio_y, width=$studio_width, height=$studio_height"
echo "Confirmed MBP Display: x=$mbp_x, y=$mbp_y, width=$mbp_width, height=$mbp_height"
echo "Confirmed Window: x=$window_x, y=$window_y, width=$window_width, height=$window_height"

# Check if the window is within the bounds of the Studio Display
if [ "$window_x" -ge "$studio_x" ] && [ "$window_x" -lt $(($studio_x + $studio_width)) ] && [ "$window_y" -ge "$studio_y" ] && [ "$window_y" -lt $(($studio_y + $studio_height)) ]; then
    echo "Apple Studio Display"
# Check if the window is within the bounds of the MacBook Pro Display
elif [ "$window_x" -ge "$mbp_x" ] && [ "$window_x" -lt $(($mbp_x + $mbp_width)) ] && [ "$window_y" -ge "$mbp_y" ] && [ "$window_y" -lt $(($mbp_y + $mbp_height)) ]; then
    echo "MBP Display"
else
    echo "Unknown Display"
fi

